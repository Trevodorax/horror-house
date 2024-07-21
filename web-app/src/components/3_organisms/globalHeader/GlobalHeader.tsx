import type { FC } from "react";

import { LogoIcon } from "../../1_atoms/icons/LogoIcon";
import { Surface } from "../../1_atoms/surface/Surface";
import { NavigationLinkBar } from "../navigationLinkBar/NavigationLinkBar";
import { ToggleSidebarButton } from "../toggleSidebarButton/ToggleSidebarButton";

import { LoginLogoutButton } from "@/components/2_molecules/loginLogoutButton/LoginLogoutButton";
import { ToggleThemeButton } from "../toggleThemeButton/ToggleThemeButton";
import styles from "./GlobalHeader.module.scss";

export const GlobalHeader: FC = () => {
	return (
		<header className={styles.headerContainer}>
			<Surface background="secondary" className={styles.headerSurface}>
				<LogoIcon className={styles.logoIcon} />
				<NavigationLinkBar />
				<div className={styles.buttonsContainer}>
					<LoginLogoutButton />
					<ToggleThemeButton />
					<ToggleSidebarButton />
				</div>
			</Surface>
		</header>
	);
};
