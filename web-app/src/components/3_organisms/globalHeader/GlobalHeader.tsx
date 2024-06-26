import type { FC } from "react";

import { LogoIcon } from "../../1_atoms/icons/LogoIcon";
import { Surface } from "../../1_atoms/surface/Surface";
import { Navigation } from "../navigation/Navigation";
import { NavigationLinkBar } from "../navigationLinkBar/NavigationLinkBar";

import styles from "./GlobalHeader.module.scss";

export const GlobalHeader: FC = () => {
	return (
		<header className={styles.headerContainer}>
			<Surface background="secondary" className={styles.headerSurface}>
				<LogoIcon className={styles.logoIcon} />
				<NavigationLinkBar />
				<Navigation />
			</Surface>
		</header>
	);
};
