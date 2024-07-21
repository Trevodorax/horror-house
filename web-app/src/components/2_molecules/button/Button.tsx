import classNames from "classnames";
import type { ButtonHTMLAttributes, FC, MouseEventHandler } from "react";

import { Surface } from "../../1_atoms/surface/Surface";

import styles from "./Button.module.scss";

type buttonVariant =
	| "default"
	| "primary"
	| "secondary"
	| "transparent"
	| "error";

interface Props {
	variant?: buttonVariant;
}

export const Button: FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = ({
	variant = "default",
	...props
}) => {
	const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.stopPropagation();
		if (props.onClick) {
			props.onClick(e);
		}
	};
	return (
		<button
			{...props}
			className={classNames(
				props.className,
				styles.buttonContainer,
				styles[`variant-${variant}`],
			)}
			onClick={handleClick}
		>
			<Surface background={variant} className={styles.buttonSurface}>
				{props.children}
			</Surface>
		</button>
	);
};
