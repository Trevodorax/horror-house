import { Surface } from "@/components/1_atoms/surface/Surface";
import { Text } from "@/components/1_atoms/text/Text";
import type { FC } from "react";
import styles from "./SessionInfo.module.scss";

type Session = {
	title: string;
	description: string;
	imageUrl: string;
};

interface Props {
	session: Session;
}

export const SessionInfo: FC<Props> = ({ session }) => {
	return (
		<Surface className={styles.container}>
			<Surface className={styles.headingContainer}>
				<Text className={styles.title} type="sectionHeading">
					{session.title}
				</Text>
				<img
					className={styles.image}
					src={session.imageUrl}
					alt="session decoration"
				/>
			</Surface>
			<Text className={styles.description} type="simpleText">
				{session.description}
			</Text>
		</Surface>
	);
};
