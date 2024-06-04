import type { FC } from "react";

import { Surface } from "../../1_atoms/surface/Surface";
import styles from "./Home.module.scss";

export const Home: FC = () => {
	return (
		<Surface className={styles.homeContainer}>
			<Surface background="primary" className={styles.myAppText}>
				This is my app
			</Surface>
		</Surface>
	);
};
