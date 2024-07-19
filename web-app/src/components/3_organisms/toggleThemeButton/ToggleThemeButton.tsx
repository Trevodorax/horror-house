import type { FC } from "react";

import { ThemeIcon } from "../../1_atoms/icons/ThemeIcon"
import { Button } from "../../2_molecules/button/Button";

import { useTheme } from "../themeContext/ThemeContext";
import styles from "./ToggleThemeButton.module.scss";

export const ToggleThemeButton: FC = () => {
	const { toggleTheme, isDark } = useTheme();

	return (
		<>
			<Button
				className={styles.button}
				variant="transparent"
				onClick={toggleTheme}
			>
				<ThemeIcon className={styles.icon} dark={isDark} />
			</Button>
		</>
	);
};
