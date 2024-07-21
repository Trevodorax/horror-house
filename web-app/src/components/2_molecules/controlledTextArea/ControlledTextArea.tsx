import { InputInfoWrapper } from "@/components/1_atoms/inputInfoWrapper/InputInfoWrapper";
import { forwardRef } from "react";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
	errorMessage?: string;
}

export const ControlledTextArea = forwardRef<HTMLTextAreaElement, Props>(
	({ label, errorMessage, ...textAreaProps }, ref) => {
		return (
			<InputInfoWrapper label={label} errorMessage={errorMessage}>
				<textarea ref={ref} {...textAreaProps} />
			</InputInfoWrapper>
		);
	},
);
