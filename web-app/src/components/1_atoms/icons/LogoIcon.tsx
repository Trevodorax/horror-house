import type { FC } from "react";
import type { BaseIconProps } from "./IconProps.interface";

export const LogoIcon: FC<BaseIconProps> = ({ className, style }) => {
	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			style={style}
		>
			<title>Logo</title>
			<ellipse cx="20" cy="15" rx="12" ry="12" fill="#D9D9D9" />
			<path
				d="M8 17C8 15.8954 8.89543 15 10 15H30C31.1046 15 32 15.8954 32 17V32.9394C32 34.4233 30.2893 35.2541 29.123 34.3366C28.4855 33.8351 27.5895 33.8286 26.9448 34.3209L25.2527 35.613C24.4997 36.1879 23.4466 36.1557 22.7301 35.5357L21.5898 34.5489C20.8734 33.9289 19.8203 33.8967 19.0673 34.4717L17.4938 35.6732C16.7771 36.2204 15.7829 36.2204 15.0662 35.6732L13.3418 34.3565C12.6657 33.8402 11.7294 33.8337 11.0461 34.3405C9.78647 35.2749 8 34.3757 8 32.8073V17Z"
				fill="#D9D9D9"
			/>
			<ellipse cx="15.44" cy="13.08" rx="1.92" ry="1.92" fill="black" />
			<circle cx="24.56" cy="13.08" r="1.92" fill="black" />
		</svg>
	);
};
