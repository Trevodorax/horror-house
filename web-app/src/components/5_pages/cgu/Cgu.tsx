import { Surface } from "@/components/1_atoms/surface/Surface";
import { Text } from "@/components/1_atoms/text/Text";
import type { FC } from "react";
import styles from "./Cgu.module.scss";

export const Cgu: FC = () => {
	return (
		<Surface>
			<Text className={styles.content}>
				1. Acceptance of Terms By purchasing a ticket or participating in any
				activities at [Escape Game Company Name] ("the Company"), you ("the
				Participant") agree to comply with and be bound by the following terms
				and conditions. If you do not agree with these terms, please do not
				participate in our activities. 2. Booking and Payment All bookings must
				be made through the Company's official website, authorized partners, or
				directly at the venue. Payment is required at the time of booking. The
				Company accepts major credit cards and other payment methods as
				specified on the booking page. Bookings are subject to availability and
				confirmation from the Company. 3. Cancellation and Refund Policy
				Cancellations made more than 48 hours before the scheduled start time
				will receive a full refund. Cancellations made within 48 hours of the
				scheduled start time are non-refundable. If the Company needs to cancel
				an event for any reason, Participants will receive a full refund or may
				reschedule to a different time. 4. Arrival and Check-In Participants
				must arrive at least 15 minutes before the scheduled start time for
				check-in and briefing. Late arrivals may not be admitted, and refunds
				will not be provided for late or missed sessions. 5. Participation and
				Safety Participants must follow all instructions and guidelines provided
				by the Company’s staff at all times. The Company reserves the right to
				refuse entry or remove any Participant who poses a risk to safety,
				engages in disruptive behavior, or does not comply with the Company's
				rules. Participants under the age of 18 must be accompanied by a
				responsible adult. 6. Health and Fitness By participating, Participants
				confirm that they are in good health and do not have any medical
				conditions that could be aggravated by physical or mental stress. The
				Company is not liable for any injuries or health issues that arise from
				participation. 7. Personal Belongings Participants are responsible for
				their personal belongings. The Company is not liable for any loss,
				theft, or damage to personal property. 8. Intellectual Property All
				content, puzzles, designs, and materials used in the escape rooms are
				the intellectual property of the Company. Participants must not copy,
				distribute, or recreate any aspect of the escape room experience. 9.
				Photography and Media The Company reserves the right to use photographs
				and video recordings taken during the events for promotional purposes.
				Participants may request not to be photographed or recorded by informing
				the staff prior to the start of the event. 10. Liability Waiver By
				participating, Participants agree to release and hold harmless the
				Company, its employees, and affiliates from any liability, claims, or
				damages that may arise from participation in the activities. 11. Changes
				to Terms The Company reserves the right to modify these terms and
				conditions at any time. Any changes will be posted on the Company’s
				website and will take effect immediately. 12. Governing Law These terms
				and conditions are governed by and construed in accordance with the laws
				of [Country/State]. Any disputes arising from these terms shall be
				subject to the exclusive jurisdiction of the courts of [Country/State].
				13. Contact Information For any questions or concerns regarding these
				terms and conditions, please contact the Company at: Email: [Company
				Email] Phone: [Company Phone Number] Address: [Company Address] By
				proceeding with the booking and participation, you acknowledge that you
				have read, understood, and agreed to these terms and conditions. [Escape
				Game Company Name] thanks you for your understanding and cooperation. We
				hope you have an enjoyable and thrilling experience with us!
			</Text>
		</Surface>
	);
};
