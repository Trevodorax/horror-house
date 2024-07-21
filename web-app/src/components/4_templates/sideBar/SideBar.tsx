import classNames from "classnames";
import type { FC, HTMLAttributes } from "react";

import { Surface } from "../../1_atoms/surface/Surface";

import { ActionsHeader } from "../../3_organisms/actionsHeader/ActionsHeader";
import styles from "./SideBar.module.scss";

interface Props {
	children: React.ReactNode;
	open: boolean;
	onClose: () => void;
}

export const SideBar: FC<Props & HTMLAttributes<HTMLElement>> = ({
	children,
	open,
	onClose,
	...props
}) => {
	return (
		<aside
			{...props}
			className={classNames(props.className, styles.sideBarContainer, {
				[styles.open]: open,
			})}
		>
			<Surface>
				<ActionsHeader close={onClose} title="Navigation" />
			</Surface>
			<Surface className={styles.sideBarSurface}>{children}</Surface>
		</aside>
	);
};
