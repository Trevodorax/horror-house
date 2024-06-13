import classNames from "classnames";
import type React from "react";
import { forwardRef } from "react";
import { Surface } from "../surface/Surface";
import { Text } from "../text/Text";
import styles from "./Input.module.scss";

interface InputWrapperProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	errorMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, InputWrapperProps>(
	({ label, errorMessage, ...inputProps }, ref) => {
		return (
			<Surface>
				{label && <label className={styles.label}>{label}</label>}
				<input
					ref={ref}
					{...inputProps}
					className={classNames(inputProps.className)}
				/>
				{errorMessage && (
					<Text variant="error" className={styles.errorMessage}>
						{errorMessage}
					</Text>
				)}
			</Surface>
		);
	},
);
