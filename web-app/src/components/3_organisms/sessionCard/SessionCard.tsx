import { Text } from "@/components/1_atoms/text/Text";
import { Card } from "@/components/2_molecules/card/Card";
import { useMutationDeleteSession } from "@/hooks/queries/useMutationDeleteSession";
import type { Session } from "@/types/Session";
import type { FC } from "react";
import { ActionsHeader } from "../actionsHeader/ActionsHeader";
import styles from "./SessionCard.module.scss";
import { useModal } from "../modalContext/ModalContext";
import { UpdateSessionForm } from "../updateSessionForm/UpdateSessionForm";
import { useNavigate } from "react-router-dom";

interface Props {
	session: Session;
}

export const SessionCard: FC<Props> = ({ session }) => {
	const { mutate: deleteSession } = useMutationDeleteSession();
    const {openModalWith} = useModal()
    const navigate = useNavigate()

	const onRemove = () => {
		deleteSession(session.id);
	};

    const onEdit = () => {
		openModalWith(<UpdateSessionForm session={session} />)
	};

    const onCardClick = () => {
        navigate(`/session/${session.id}`)
    }

	return (
		<Card className={styles.card} onClick={onCardClick}>
			<ActionsHeader title={session.title} remove={onRemove} edit={onEdit} />
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
