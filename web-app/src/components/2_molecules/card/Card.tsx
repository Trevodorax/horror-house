import { Surface } from "@/components/1_atoms/surface/Surface";
import classNames from "classnames";
import type { FC, ReactNode } from "react";
import styles from "./Card.module.scss";

interface Props {
	children: ReactNode;
	className?: string;
	onClick?: () => void;
}

export const Card: FC<Props> = ({ children, className, onClick }) => {
	return (
		<Surface onClick={onClick} className={classNames(styles.cardContainer, className, {[styles.clickable]: onClick !== undefined})}>
			{children}
		</Surface>
	);
};
