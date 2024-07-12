import type { FC } from "react";
import type { BaseIconProps } from "./IconProps.interface";

interface Props extends BaseIconProps {
	open: boolean;
}

export const MenuIcon: FC<Props> = ({ className, style, open }) => {
	return (
		<svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			style={style}
		>
			<title>{open ? "Open" : "Close"} menu</title>
			{open ? (
				<path
					d="M12.2857 13.5H29.4286C29.5857 13.5 29.7143 13.3714 29.7143 13.2143V11.2143C29.7143 11.0571 29.5857 10.9286 29.4286 10.9286H12.2857C12.1286 10.9286 12 11.0571 12 11.2143V13.2143C12 13.3714 12.1286 13.5 12.2857 13.5ZM12 20.7857C12 20.9429 12.1286 21.0714 12.2857 21.0714H29.4286C29.5857 21.0714 29.7143 20.9429 29.7143 20.7857V18.7857C29.7143 18.6286 29.5857 18.5 29.4286 18.5H12.2857C12.1286 18.5 12 18.6286 12 18.7857V20.7857ZM30 3.42857H2C1.84286 3.42857 1.71429 3.55714 1.71429 3.71429V5.71429C1.71429 5.87143 1.84286 6 2 6H30C30.1571 6 30.2857 5.87143 30.2857 5.71429V3.71429C30.2857 3.55714 30.1571 3.42857 30 3.42857ZM30 26H2C1.84286 26 1.71429 26.1286 1.71429 26.2857V28.2857C1.71429 28.4429 1.84286 28.5714 2 28.5714H30C30.1571 28.5714 30.2857 28.4429 30.2857 28.2857V26.2857C30.2857 26.1286 30.1571 26 30 26ZM2.8 20.6464L8.38214 16.25C8.41973 16.2205 8.45011 16.1828 8.47101 16.1398C8.4919 16.0968 8.50276 16.0496 8.50276 16.0018C8.50276 15.954 8.4919 15.9068 8.47101 15.8638C8.45011 15.8208 8.41973 15.7831 8.38214 15.7536L2.8 11.3536C2.59286 11.1893 2.28572 11.3357 2.28572 11.6V20.3964C2.2857 20.4561 2.30246 20.5145 2.3341 20.5651C2.36573 20.6157 2.41096 20.6563 2.46461 20.6824C2.51826 20.7085 2.57816 20.7189 2.63747 20.7126C2.69678 20.7062 2.7531 20.6833 2.8 20.6464Z"
					fill="currentColor"
				/>
			) : (
				<path
					d="M12.2857 13.5H29.4286C29.5857 13.5 29.7143 13.3714 29.7143 13.2143V11.2143C29.7143 11.0571 29.5857 10.9286 29.4286 10.9286H12.2857C12.1286 10.9286 12 11.0571 12 11.2143V13.2143C12 13.3714 12.1286 13.5 12.2857 13.5ZM12 20.7857C12 20.9429 12.1286 21.0714 12.2857 21.0714H29.4286C29.5857 21.0714 29.7143 20.9429 29.7143 20.7857V18.7857C29.7143 18.6286 29.5857 18.5 29.4286 18.5H12.2857C12.1286 18.5 12 18.6286 12 18.7857V20.7857ZM30 3.42857H2C1.84286 3.42857 1.71429 3.55714 1.71429 3.71429V5.71429C1.71429 5.87143 1.84286 6 2 6H30C30.1571 6 30.2857 5.87143 30.2857 5.71429V3.71429C30.2857 3.55714 30.1571 3.42857 30 3.42857ZM30 26H2C1.84286 26 1.71429 26.1286 1.71429 26.2857V28.2857C1.71429 28.4429 1.84286 28.5714 2 28.5714H30C30.1571 28.5714 30.2857 28.4429 30.2857 28.2857V26.2857C30.2857 26.1286 30.1571 26 30 26ZM1.83571 16.2464L7.41786 20.6429C7.625 20.8071 7.93214 20.6607 7.93214 20.3964V11.6036C7.93214 11.3393 7.62857 11.1929 7.41786 11.3571L1.83571 15.7536C1.79818 15.7828 1.76781 15.8201 1.74691 15.8628C1.72602 15.9055 1.71516 15.9525 1.71516 16C1.71516 16.0475 1.72602 16.0945 1.74691 16.1372C1.76781 16.1799 1.79818 16.2172 1.83571 16.2464Z"
					fill="currentColor"
				/>
			)}
		</svg>
	);
};
