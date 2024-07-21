import { Surface } from "@/components/1_atoms/surface/Surface";
import { Text } from "@/components/1_atoms/text/Text";
import { Button } from "@/components/2_molecules/button/Button";
import { CreateSessionForm } from "@/components/3_organisms/createSessionForm/CreateSessionForm";
import { useModal } from "@/components/3_organisms/modalContext/ModalContext";
import { SessionCard } from "@/components/3_organisms/sessionCard/SessionCard";
import { useQueryGetMe } from "@/hooks/queries/useQueryGetMe";
import { useQueryGetSessions } from "@/hooks/queries/useQueryGetSessions";
import { UserRole } from "@/types/User";
import { useState } from "react";
import styles from "./Sessions.module.scss";

export const Sessions = () => {
	const sessions = useQueryGetSessions();
	const { openModalWith } = useModal();
	const [search, setSearch] = useState("");
	const me = useQueryGetMe();

	const isAdmin =
		me.data?.role === UserRole.ADMIN || me.data?.role === UserRole.SUPER_ADMIN;

	return (
		<Surface className={styles.sessionsPageContainer}>
			<Text type="pageHeading">Sessions</Text>
			<div className={styles.searchAndActions}>
				<input
					placeholder="Search by title"
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className={styles.searchInput}
				/>
				{isAdmin && (
					<Button
						className={styles.newSessionButton}
						variant="primary"
						onClick={() => openModalWith(<CreateSessionForm />)}
					>
						New session
					</Button>
				)}
			</div>
			<div className={styles.cardsContainer}>
				{sessions.data
					?.filter((session) => session.title.includes(search))
					.map((session) => (
						<SessionCard key={session.id} session={session} />
					))}
			</div>
		</Surface>
	);
};
