import type { FC } from "react";

import { LogoIcon } from "../../1_atoms/icons/LogoIcon";
import { MenuIcon } from "../../1_atoms/icons/MenuIcon";
import { Surface } from "../../1_atoms/surface/Surface";
import { Text } from "../../1_atoms/text/Text";
import { Button } from "../../2_molecules/button/Button";

import styles from "./Header.module.scss";

export const Header: FC = () => {
	return (
		<header className={styles.headerContainer}>
			<Surface className={styles.headerSurface}>
				<LogoIcon className={styles.logoIcon} />
				<Text type="pageHeading">Horror House</Text>
				{/* TODO: Navbar here instead */}
				<Button className={styles.menuButton} variant="transparent">
					<MenuIcon open={false} className={styles.menuIcon} />
				</Button>
			</Surface>
		</header>
	);
};
