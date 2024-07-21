import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Text } from "@/components/1_atoms/text/Text";
import { Button } from "@/components/2_molecules/button/Button";
import { ControlledInput } from "@/components/2_molecules/controlledInput/ControlledInput";
import { useMutationLogIn } from "@/hooks/queries/useMutationLogIn";
import styles from "./Login.module.scss";

const loginFormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

export const Login: FC = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
	});

	const { mutate: logIn } = useMutationLogIn();

	const onSubmit: SubmitHandler<z.infer<typeof loginFormSchema>> = async (
		data,
	) => {
		logIn(data);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Text type="pageHeading">Log In</Text>
			<ControlledInput
				label="Email"
				errorMessage={errors.email?.message}
				className={styles.input}
				{...control.register("email")}
			/>
			<ControlledInput
				label="Password"
				errorMessage={errors.password?.message}
				className={styles.input}
				{...control.register("password")}
			/>
			<Button variant="primary" className={styles.submitButton} type="submit">
				Send
			</Button>
		</form>
	);
};
