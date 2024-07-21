import { Text } from "@/components/1_atoms/text/Text";
import { Button } from "@/components/2_molecules/button/Button";
import { ControlledInput } from "@/components/2_molecules/controlledInput/ControlledInput";
import {
	CreateBookingSchema,
	useMutationCreateBooking,
} from "@/hooks/queries/useMutationCreateBooking";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { z } from "zod";
import { useModal } from "../modalContext/ModalContext";
import styles from "./BookSessionForm.module.scss";
import { FC } from "react";

const BookSessionFormSchema = CreateBookingSchema.omit({sessionId: true})

interface Props {
    sessionId: string
}

export const BookSessionForm: FC<Props> = ({sessionId}) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof BookSessionFormSchema>>({
		resolver: zodResolver(BookSessionFormSchema),
	});

	const { mutate: createBooking } = useMutationCreateBooking();
	const { closeModal } = useModal();

	const onSubmit: SubmitHandler<z.infer<typeof BookSessionFormSchema>> = async (
		data,
	) => {
		createBooking({...data, sessionId});
		closeModal();
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Text type="sectionHeading">Book session</Text>
			<ControlledInput
				label="Email"
				errorMessage={errors.clientEmail?.message}
				className={styles.input}
				{...control.register("clientEmail")}
			/>
            <ControlledInput
				label="Number of participants"
				errorMessage={errors.nbParticipants?.message}
				className={styles.input}
				{...control.register("nbParticipants", { valueAsNumber: true })}
			/>
			<ControlledInput
				label="Start time"
				errorMessage={errors.startTime?.message}
				type="datetime-local"
				className={styles.input}
				{...control.register("startTime", { valueAsDate: true })}
			/>
			<Button variant="primary" className={styles.submitButton} type="submit">
				Create
			</Button>
		</form>
	);
};
