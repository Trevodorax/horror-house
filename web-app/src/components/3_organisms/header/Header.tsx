import type { FC } from "react";

import { LogoIcon } from "../../1_atoms/icons/LogoIcon";
import { Surface } from "../../1_atoms/surface/Surface";
import { Text } from "../../1_atoms/text/Text";
import { Navigation } from "../navigation/Navigation";

import styles from "./Header.module.scss";

export const Header: FC = () => {
	return (
		<header className={styles.headerContainer}>
			<Surface className={styles.headerSurface}>
				<LogoIcon className={styles.logoIcon} />
				<Text type="pageHeading">Horror House</Text>
				<Navigation />
			</Surface>
		</header>
	);
};
