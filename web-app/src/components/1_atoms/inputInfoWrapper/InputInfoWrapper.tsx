import type { FC, ReactNode } from "react";
import { Surface } from "../surface/Surface";
import { Text } from "../text/Text";
import styles from "./InputInfoWrapper.module.scss";

interface InputInfoWrapperProps {
	label?: string;
	errorMessage?: string;
	children: ReactNode;
}

export const InputInfoWrapper: FC<InputInfoWrapperProps> = ({
	label,
	errorMessage,
	children,
}) => {
	return (
		<Surface>
			{label && <label className={styles.label}>{label}</label>}
			{children}
			{errorMessage && (
				<Text variant="error" className={styles.errorMessage}>
					{errorMessage}
				</Text>
			)}
		</Surface>
	);
};
