import classNames from "classnames";
import type { FC, HTMLAttributes, ReactNode } from "react";

import styles from "./Surface.module.scss";

type surfaceBackground =
	| "default"
	| "inversed"
	| "primary"
	| "secondary"
	| "alert"
	| "success"
	| "warning"
	| "info"
	| "error"
	| "transparent";

interface Props {
	children: ReactNode;
	background?: surfaceBackground;
}

export const Surface: FC<Props & HTMLAttributes<HTMLDivElement>> = ({
	children,
	background = "default",
	...props
}) => {
	return (
		<div
			{...props}
			className={classNames(
				props.className,
				styles.surface,
				styles[background],
			)}
		>
			{children}
		</div>
	);
};
