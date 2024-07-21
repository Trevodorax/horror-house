import { Text } from "@/components/1_atoms/text/Text";
import { Button } from "@/components/2_molecules/button/Button";
import { ControlledInput } from "@/components/2_molecules/controlledInput/ControlledInput";
import { ControlledTextArea } from "@/components/2_molecules/controlledTextArea/ControlledTextArea";
import {
	UpdateSessionSchema,
	useMutationUpdateSession,
} from "@/hooks/queries/useMutationUpdateSession";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { z } from "zod";
import { useModal } from "../modalContext/ModalContext";
import styles from "./UpdateSessionForm.module.scss";
import { Session } from "@/types/Session";
import { FC } from "react";

interface Props {
	session: Session
}

export const UpdateSessionForm: FC<Props> = ({session}) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof UpdateSessionSchema>>({
		resolver: zodResolver(UpdateSessionSchema),
		defaultValues: session
	});

	const { mutate: updateSession } = useMutationUpdateSession();
	const { closeModal } = useModal();

	const onSubmit: SubmitHandler<z.infer<typeof UpdateSessionSchema>> = async (
		data,
	) => {
		updateSession(data);
		closeModal();
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Text type="sectionHeading">Update session</Text>
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
				{...control.register("durationMinutes", { valueAsNumber: true })}
			/>
			<ControlledInput
				label="Minimum number of participants"
				errorMessage={errors.minNbParticipants?.message}
				type="number"
				className={styles.input}
				{...control.register("minNbParticipants", { valueAsNumber: true })}
			/>
			<Button variant="primary" className={styles.submitButton} type="submit">
				Update
			</Button>
		</form>
	);
};
