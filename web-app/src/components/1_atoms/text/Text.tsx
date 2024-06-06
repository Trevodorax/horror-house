import classNames from "classnames";
import type { FC } from "react";

import styles from "./Text.module.scss";

type textType =
	| "pageHeading"
	| "sectionHeading"
	| "subSectionHeading"
	| "simpleText";

type textVariant =
	| "default"
	| "inversed"
	| "primary"
	| "secondary"
	| "alert"
	| "success"
	| "warning"
	| "info"
	| "error";

interface Props {
	children: string;
	type?: textType;
	variant?: textVariant;
	className?: string;
}

const rolePerType: Record<textType, keyof JSX.IntrinsicElements> = {
	pageHeading: "h1",
	sectionHeading: "h2",
	subSectionHeading: "h3",
	simpleText: "p",
};

export const Text: FC<Props> = ({
	children,
	type = "simpleText",
	variant = "default",
	className,
}) => {
	const WrapperComponent = rolePerType[type];

	return (
		<WrapperComponent
			className={classNames(
				className,
				styles.textWrapper,
				styles[`textVariant-${variant}`],
			)}
		>
			{children}
		</WrapperComponent>
	);
};
