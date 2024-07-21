import { TrashIcon } from "@/components/1_atoms/icons/TrashIcon";
import { Surface } from "@/components/1_atoms/surface/Surface";
import { Text } from "@/components/1_atoms/text/Text";
import { Button } from "@/components/2_molecules/button/Button";
import { CreateUserForm } from "@/components/3_organisms/createUserForm/CreateUserForm";
import { useModal } from "@/components/3_organisms/modalContext/ModalContext";
import { useMutationDeleteUser } from "@/hooks/queries/useMutationDeleteUser";
import { useQueryGetUsers } from "@/hooks/queries/useQueryGetUsers";
import { useState } from "react";
import styles from "./Employees.module.scss";

export const Employees = () => {
	const users = useQueryGetUsers();
	const { mutate: deleteUser } = useMutationDeleteUser();
	const { openModalWith } = useModal();
	const [search, setSearch] = useState("");

	return (
		<Surface className={styles.employeesPageContainer}>
			<Text type="pageHeading">Employees</Text>
			<div className={styles.searchAndActions}>
				<input
					placeholder="Search by name"
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<Button
					className={styles.newUserButton}
					variant="primary"
					onClick={() => openModalWith(<CreateUserForm />)}
				>
					New employee
				</Button>
			</div>
			<div>
				<table className={styles.usersTable}>
					<thead>
						<tr>
							<td>
								<Text>Full name</Text>
							</td>
							<td>
								<Text>Email</Text>
							</td>
							<td>
								<Text>Role</Text>
							</td>
							<td>
								<Text>Delete</Text>
							</td>
						</tr>
					</thead>
					{users.data
						?.filter((user) => user.fullName.toLowerCase().includes(search))
						.map((user) => (
							<tr key={user.email}>
								<td>
									<Text>{user.fullName}</Text>
								</td>
								<td>
									<Text>{user.email}</Text>
								</td>
								<td>
									<Text>{user.role}</Text>
								</td>
								<td>
									<Button
										className={styles.trashButton}
										variant="error"
										onClick={() => deleteUser({ id: user.id })}
									>
										<TrashIcon className={styles.trashIcon} />
									</Button>
								</td>
							</tr>
						)) ?? "no data"}
				</table>
			</div>
		</Surface>
	);
};
