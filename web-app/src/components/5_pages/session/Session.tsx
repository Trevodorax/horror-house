import { TrashIcon } from "@/components/1_atoms/icons/TrashIcon";
import { Text } from "@/components/1_atoms/text/Text";
import { Button } from "@/components/2_molecules/button/Button";
import { BookSessionForm } from "@/components/3_organisms/bookSessionForm/BookSessionForm";
import { useModal } from "@/components/3_organisms/modalContext/ModalContext";
import { SessionCard } from "@/components/3_organisms/sessionCard/SessionCard";
import { useMutationDeleteBooking } from "@/hooks/queries/useMutationDeleteBooking";
import { useQueryGetBookingsForSession } from "@/hooks/queries/useQueryGetBookingsForSession";
import { useQueryGetSessionById } from "@/hooks/queries/useQueryGetSessionById";
import { router } from "@/router";
import { useParams } from "react-router-dom";
import styles from "./Session.module.scss";
import { useQueryGetMe } from "@/hooks/queries/useQueryGetMe";
import { UserRole } from "@/types/User";

export const Session = () => {
	const { sessionId } = useParams<{ sessionId: string }>();
	const { openModalWith } = useModal();
	const { mutate: deleteBooking } = useMutationDeleteBooking();
	const me = useQueryGetMe()

	const session = useQueryGetSessionById(sessionId ?? "");
	const existingBookings = useQueryGetBookingsForSession(sessionId ?? "");

	if (!sessionId) {
		router.navigate("/sessions");
		return null;
	}

	const isAdmin = me.data?.role === UserRole.ADMIN || me.data?.role === UserRole.SUPER_ADMIN

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
				<Button
					variant="primary"
					onClick={() =>
						openModalWith(<BookSessionForm sessionId={sessionId} />)
					}
				>
					Book this session here
				</Button>
				<Text type="sectionHeading">Bookings on this session</Text>
				<table className={styles.usersTable}>
					<thead>
						<tr>
							<td>
								<Text>Client email</Text>
							</td>
							<td>
								<Text>Number of participants</Text>
							</td>
							<td>
								<Text>Start time</Text>
							</td>
							{isAdmin && (
								<td>
									<Text>Delete</Text>
								</td>
							)}
						</tr>
					</thead>
					{existingBookings.data?.map((booking) => (
						<tr key={booking.id}>
							<td>
								<Text>{booking.clientEmail}</Text>
							</td>
							<td>
								<Text>{`${booking.nbParticipants}`}</Text>
							</td>
							<td>
								<Text>{`${booking.startTime.toLocaleLowerCase()}`}</Text>
							</td>
							{isAdmin && (
								<td>
									<Button
										className={styles.trashButton}
										variant="error"
										onClick={() => deleteBooking(booking.id)}
									>
										<TrashIcon className={styles.trashIcon} />
									</Button>
								</td>
							)}
						</tr>
					)) ?? "no data"}
				</table>
			</div>
		</div>
	);
};
