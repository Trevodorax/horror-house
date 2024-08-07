import type { FC } from "react";

import { Text } from "@/components/1_atoms/text/Text";
import { Button } from "@/components/2_molecules/button/Button";
import { Carousel } from "@/components/3_organisms/carousel/Carousel";
import { SessionInfo } from "@/components/3_organisms/sessionInfo/SessionInfo";
import { AlternatingImageTextsSection } from "@/components/4_templates/alternatingImageTextsSection/AlternatingImageTextsSection";
import { ContentWithImageSection } from "@/components/4_templates/contentWithImageSection/ContentWithImageSection";
import { useAnimateOnVisible } from "@/hooks/useAnimateOnVisible";
import classNames from "classnames";
import { Surface } from "../../1_atoms/surface/Surface";
import styles from "./Home.module.scss";

const projectDescription = {
	content:
		"Welcome to Horror House, where your nightmares come to life. We specialize in immersive horror escape games, plunging you into worlds of suspense and terror. Each room is a meticulously crafted, hauntingly beautiful environment filled with spine-tingling surprises. Gather your bravest friends, face your deepest fears, and see if you can escape the darkness before time runs out. Will you conquer the shadows, or will they claim you forever?",
};

const escapeGameSessions = [
	{
		title: "The Haunting of Hill House",
		description:
			"You and your friends have been invited to a dinner party at the infamous Hill House. But when you arrive, you quickly realize that this is no ordinary gathering. The house is alive with spirits, and they have a bone to pick with you. Can you uncover the secrets of Hill House and escape before it's too late?",
		imageUrl:
			"https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg",
	},
	{
		title: "The Shining",
		description: "All work and no play",
		imageUrl:
			"https://t4.ftcdn.net/jpg/06/81/34/29/360_F_681342927_XnHKRjZBQpDB5lL3dUs1Wd6ZgKnIlJVC.jpg",
	},
	{
		title: "The Exorcist",
		description: "The power of Christ compels you",
		imageUrl: "https://cdn.jwplayer.com/v2/media/OJGSRhSM/poster.jpg?width=720",
	},
];

const teams = [
	{
		imageUrl:
			"https://images.unsplash.com/photo-1515121061221-7d6ce2dcd1fe?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		text: "The Visionaries: Our lead designers and storytellers bring terrifying tales to life, ensuring every detail contributes to the atmosphere of suspense and dread.",
	},
	{
		imageUrl:
			"https://images.unsplash.com/photo-1605900009749-b3cdb75ce9c5?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		text: "The Builders: Skilled craftsmen and set designers create our hauntingly beautiful environments, transforming ordinary rooms into extraordinary nightmares.",
	},
	{
		imageUrl:
			"https://plus.unsplash.com/premium_photo-1681426673022-db3d911ea11a?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		text: "The Technicians: Our tech wizards engineer the puzzles and special effects that keep you on the edge of your seat, ensuring seamless and thrilling gameplay.",
	},
	{
		imageUrl:
			"https://images.unsplash.com/photo-1674208732345-3feee91806ac?q=80&w=2777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		text: "The Hosts: Our friendly game masters guide you through your experience, providing hints and ensuring your safety as you navigate through the terror.",
	},
];

export const Home: FC = () => {
	const [ref, isVisible] = useAnimateOnVisible({
		threshold: 0.1,
	});

	return (
		<Surface className={styles.homeContainer}>
			<ContentWithImageSection
				className={styles.firstSection}
				imageUrl="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718150400&semt=ais_user"
			>
				<Surface background="transparent" className={styles.content}>
					<Text type="simpleText">{projectDescription.content}</Text>
					<Button className={styles.button} variant="primary">
						Book Now
					</Button>
				</Surface>
			</ContentWithImageSection>
			<Surface background={"secondary"}>
				<Text className={styles.sectionHeading} type="sectionHeading">
					Meet the Team
				</Text>
				<AlternatingImageTextsSection imageTexts={teams} />
			</Surface>
			<Surface>
				<div
					ref={ref}
					className={classNames({ [styles.animating]: isVisible })}
				>
					<Carousel
						className={classNames(styles.carousel)}
						items={escapeGameSessions.map((session) => (
							<SessionInfo key={`${session.title}`} session={session} />
						))}
					/>
				</div>
			</Surface>
		</Surface>
	);
};
