import { InputInfoWrapper } from "@/components/1_atoms/inputInfoWrapper/InputInfoWrapper";
import classNames from "classnames";
import type React from "react";
import { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	errorMessage?: string;
}

export const ControlledInput = forwardRef<HTMLInputElement, Props>(
	({ label, errorMessage, ...inputProps }, ref) => {
		return (
			<InputInfoWrapper errorMessage={errorMessage} label={label}>
				<input
					ref={ref}
					{...inputProps}
					className={classNames(inputProps.className)}
				/>
			</InputInfoWrapper>
		);
	},
);
