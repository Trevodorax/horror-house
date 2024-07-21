import { Button } from "@/components/2_molecules/button/Button";
import { ControlledInput } from "@/components/2_molecules/controlledInput/ControlledInput";
import {
	CreateSessionSchema,
	useMutationCreateSession,
} from "@/hooks/queries/useMutationCreateSession";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { z } from "zod";
import { useModal } from "../modalContext/ModalContext";
import styles from "./CreateSessionForm.module.scss";
import { ControlledTextArea } from "@/components/2_molecules/controlledTextArea/ControlledTextArea";
import { Text } from "@/components/1_atoms/text/Text";

export const CreateSessionForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof CreateSessionSchema>>({
		resolver: zodResolver(CreateSessionSchema),
	});

	const { mutate: createSession } = useMutationCreateSession();
	const { closeModal } = useModal();

	const onSubmit: SubmitHandler<z.infer<typeof CreateSessionSchema>> = async (
		data,
	) => {
		createSession(data);
		closeModal();
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Text type="sectionHeading">Create session</Text>
			<ControlledInput
				label="Theme"
				errorMessage={errors.theme?.message}
				className={styles.input}
				{...control.register("theme")}
			/>
			<ControlledInput
				label="Title"
				errorMessage={errors.title?.message}
				className={styles.input}
				{...control.register("title")}
			/>
			<ControlledTextArea
				label="Description"
				errorMessage={errors.description?.message}
				className={styles.input}
				{...control.register("description")}
			/>
			<ControlledInput
				label="Duration (in minutes)"
				type="number"
				errorMessage={errors.durationMinutes?.message}
				className={styles.input}
				{...control.register("durationMinutes", {valueAsNumber: true})}
			/>
			<ControlledInput
				label="Minimum number of participants"
				errorMessage={errors.minNbParticipants?.message}
				type="number"
				className={styles.input}
				{...control.register("minNbParticipants", {valueAsNumber: true})}
			/>
			<Button variant="primary" className={styles.submitButton} type="submit">
				Create
			</Button>
		</form>
	);
};
