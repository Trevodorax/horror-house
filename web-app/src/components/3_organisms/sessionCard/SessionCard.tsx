import { Text } from "@/components/1_atoms/text/Text";
import { Card } from "@/components/2_molecules/card/Card";
import { useMutationDeleteSession } from "@/hooks/queries/useMutationDeleteSession";
import type { Session } from "@/types/Session";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ActionsHeader } from "../actionsHeader/ActionsHeader";
import { useModal } from "../modalContext/ModalContext";
import { UpdateSessionForm } from "../updateSessionForm/UpdateSessionForm";
import styles from "./SessionCard.module.scss";
import { useQueryGetMe } from "@/hooks/queries/useQueryGetMe";
import { UserRole } from "@/types/User";

interface Props {
	session: Session;
}

export const SessionCard: FC<Props> = ({ session }) => {
	const { mutate: deleteSession } = useMutationDeleteSession();
	const { openModalWith } = useModal();
	const navigate = useNavigate();
	const me = useQueryGetMe()

	const onRemove = () => {
		deleteSession(session.id);
	};

	const onEdit = () => {
		openModalWith(<UpdateSessionForm session={session} />);
	};

	const onCardClick = () => {
		navigate(`/session/${session.id}`);
	};

	const isAdmin = me.data?.role === UserRole.ADMIN || me.data?.role === UserRole.SUPER_ADMIN

	return (
		<Card className={styles.card} onClick={onCardClick}>
			<ActionsHeader title={session.title} remove={isAdmin ? onRemove : undefined} edit={isAdmin ? onEdit : undefined} />
			<div className={styles.sessionCardContent}>
				<div>
					<Text type="subSectionHeading">{session.theme}</Text>
					<hr />
					<Text>{session.description}</Text>
					<hr />
				</div>
				<div>
					<Text>{`Minimum ${session.minNbParticipants} participants`}</Text>
					<Text>{`Lasts ${session.durationMinutes} minutes`}</Text>
				</div>
			</div>
		</Card>
	);
};
