import classNames from "classnames";
import type { FC } from "react";

import { Surface } from "@/components/1_atoms/surface/Surface";
import { Text } from "@/components/1_atoms/text/Text";

import styles from "./TextWithImageSection.module.scss";

interface Props {
	content: string;
	imageUrl: string;
	className?: string;
}

export const TextWithImageSection: FC<Props> = ({
	content,
	className,
	imageUrl,
}) => {
	return (
		<section>
			<Surface
				background="transparent"
				className={classNames(styles.contentContainer, className)}
			>
				<Text type="simpleText" className={styles.text}>
					{content}
				</Text>
				<img alt="section decoration" src={imageUrl} className={styles.image} />
			</Surface>
		</section>
	);
};
