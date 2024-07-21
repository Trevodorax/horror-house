import { InputInfoWrapper } from "@/components/1_atoms/inputInfoWrapper/InputInfoWrapper";
import classNames from "classnames";
import type React from "react";
import { forwardRef } from "react";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
	label?: string;
	errorMessage?: string;
	options: Array<{ value: string; label: string }>;
}

export const ControlledSelect = forwardRef<HTMLSelectElement, Props>(
	({ label, errorMessage, options, ...selectProps }, ref) => {
		return (
			<InputInfoWrapper errorMessage={errorMessage} label={label}>
				<select
					ref={ref}
					{...selectProps}
					className={classNames(selectProps.className)}
				>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</InputInfoWrapper>
		);
	},
);