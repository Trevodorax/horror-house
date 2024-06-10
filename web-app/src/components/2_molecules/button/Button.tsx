import classNames from "classnames";
import type { FC, HTMLAttributes } from "react";

import { Surface } from "../../1_atoms/surface/Surface";

import styles from "./Button.module.scss";

type buttonVariant = "default" | "primary" | "secondary" | "transparent";

interface Props {
	variant?: buttonVariant;
}

export const Button: FC<Props & HTMLAttributes<HTMLButtonElement>> = ({
	variant = "default",
	...props
}) => {
	return (
		<button
			{...props}
			className={classNames(
				props.className,
				styles.buttonContainer,
				styles[`variant-${variant}`],
			)}
		>
			<Surface 
        background={variant}
        className={styles.buttonSurface}
      >
        {props.children}
      </Surface>
		</button>
	);
};
