import type { FC } from "react";

import { MenuIcon } from "../../1_atoms/icons/MenuIcon";
import { Button } from "../../2_molecules/button/Button";

import { useSidebar } from "../sidebarContext/SidebarContext";
import styles from "./ToggleSidebarButton.module.scss";

export const ToggleSidebarButton: FC = () => {
	const { toggleSidebar, isOpen } = useSidebar();

	return (
		<>
			<Button
				className={styles.menuButton}
				variant="transparent"
				onClick={toggleSidebar}
			>
				<MenuIcon open={isOpen} className={styles.menuIcon} />
			</Button>
		</>
	);
};
