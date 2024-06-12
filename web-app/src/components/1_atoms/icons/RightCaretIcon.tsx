import type { FC } from "react";

import type { BaseIconProps } from "./IconProps.interface";

export const RightCaretIcon: FC<BaseIconProps> = ({ className, style }) => {
	return (
		<svg
			className={className}
			style={style}
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Right caret icon</title>
			<path
				d="M22.3687 15.4219L10.4688 5.15938C10.025 4.77813 9.375 5.12188 9.375 5.7375V26.2625C9.375 26.8781 10.025 27.2219 10.4688 26.8406L22.3687 16.5781C22.7094 16.2844 22.7094 15.7156 22.3687 15.4219Z"
				fill="currentColor"
			/>
		</svg>
	);
};
