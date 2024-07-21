import { Button } from "@/components/2_molecules/button/Button";
import { ControlledInput } from "@/components/2_molecules/controlledInput/ControlledInput";
import { ControlledSelect } from "@/components/2_molecules/controlledSelect/ControlledSelect";
import {
	CreateUserSchema,
	useMutationCreateUser,
} from "@/hooks/queries/useMutationCreateUser";
import { UserRole } from "@/types/User";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { z } from "zod";
import { useModal } from "../modalContext/ModalContext";
import styles from "./CreateUserForm.module.scss";

export const CreateUserForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof CreateUserSchema>>({
		resolver: zodResolver(CreateUserSchema),
	});

	const { mutate: createUser } = useMutationCreateUser();
	const { closeModal } = useModal();

	const onSubmit: SubmitHandler<z.infer<typeof CreateUserSchema>> = async (
		data,
	) => {
		createUser(data);
		closeModal();
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<ControlledInput
				label="Full name"
				errorMessage={errors.fullName?.message}
				className={styles.input}
				{...control.register("fullName")}
			/>
			<ControlledInput
				label="Email"
				type="email"
				errorMessage={errors.role?.message}
				className={styles.input}
				{...control.register("email")}
			/>
			<ControlledSelect
				label="Role"
				errorMessage={errors.email?.message}
				className={styles.input}
				options={[
					{ label: "admin", value: UserRole.ADMIN },
					{ label: "super admin", value: UserRole.SUPER_ADMIN },
				]}
				{...control.register("role")}
			/>
			<ControlledInput
				label="Password"
				type="password"
				errorMessage={errors.password?.message}
				className={styles.input}
				{...control.register("password")}
			/>
			<Button variant="primary" className={styles.submitButton} type="submit">
				Create
			</Button>
		</form>
	);
};
