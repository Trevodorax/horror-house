import classNames from "classnames";
import type { FC, ReactNode } from "react";

import { Surface } from "@/components/1_atoms/surface/Surface";

import styles from "./ContentWithImageSection.module.scss";

interface Props {
	imageUrl: string;
	className?: string;
	children: ReactNode;
}

export const ContentWithImageSection: FC<Props> = ({
	className,
	imageUrl,
	children
}) => {
	return (
		<section>
			<Surface
				background="transparent"
				className={classNames(styles.contentContainer, className)}
			>
				<Surface className={styles.content}>
					{children}
				</Surface>
				<img alt="section decoration" src={imageUrl} className={styles.image} />
			</Surface>
		</section>
	);
};
