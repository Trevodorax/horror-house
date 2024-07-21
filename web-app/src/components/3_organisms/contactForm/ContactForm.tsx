import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/2_molecules/button/Button";
import { ControlledInput } from "@/components/2_molecules/controlledInput/ControlledInput";
import { ControlledTextArea } from "@/components/2_molecules/controlledTextArea/ControlledTextArea";
import styles from "./ContactForm.module.scss";

const contactFormSchema = z.object({
	subject: z
		.string()
		.min(10, { message: "Subject should be more than 10 characters long" })
		.max(50, { message: "Subject should be less than 50 characters long" }),
	message: z
		.string()
		.min(20, { message: "Message should be more than 20 characters long" })
		.max(500, { message: "Message should be less than 500 characters long" }),
});

export const ContactForm: FC = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<z.infer<typeof contactFormSchema>>({
		resolver: zodResolver(contactFormSchema),
	});

	const onSubmit: SubmitHandler<z.infer<typeof contactFormSchema>> = async (
		data,
	) => {
		console.log(data);
		reset();
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<ControlledInput
				label="Subject"
				errorMessage={errors.subject?.message}
				className={styles.input}
				{...control.register("subject")}
			/>
			<ControlledTextArea
				className={styles.input}
				errorMessage={errors.message?.message}
				label="Message"
				{...control.register("message", {})}
			/>
			<Button variant="primary" className={styles.submitButton} type="submit">
				Send
			</Button>
		</form>
	);
};
