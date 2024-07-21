import { Text } from "@/components/1_atoms/text/Text";
import { SessionCard } from "@/components/3_organisms/sessionCard/SessionCard";
import { useQueryGetSessionById } from "@/hooks/queries/useQueryGetSessionById";
import { router } from "@/router";
import { useParams } from "react-router-dom";
import styles from "./Session.module.scss";
import { Button } from "@/components/2_molecules/button/Button";
import { useModal } from "@/components/3_organisms/modalContext/ModalContext";
import { BookSessionForm } from "@/components/3_organisms/bookSessionForm/BookSessionForm";
import { useQueryGetBookingsForSession } from "@/hooks/queries/useQueryGetBookingsForSession";

export const Session = () => {
	const { sessionId } = useParams<{ sessionId: string }>();
	const {openModalWith} = useModal()

	const session = useQueryGetSessionById(sessionId ?? "");
	const existingBookings = useQueryGetBookingsForSession(sessionId ?? '')

	if (!sessionId) {
		router.navigate("/sessions");
		return null;
	}

	return (
		<div className={styles.sessionPageContainer}>
				<div>
					<Text type="pageHeading">{session.data?.title ?? "Title"}</Text>
					{session.isLoading || session.data == null ? (
						<div>...</div>
					) : (
						<SessionCard session={session.data} />
					)}
				</div>
				<div>
				<Button variant="primary" onClick={() => openModalWith(<BookSessionForm sessionId={sessionId} />)}>Book this session here</Button>
				<Text type="sectionHeading">Bookings on this session</Text>
				{existingBookings.data?.map((booking) => (
					<Text>{booking.clientEmail}</Text>
				))}
			</div>
		</div>
	);
};
