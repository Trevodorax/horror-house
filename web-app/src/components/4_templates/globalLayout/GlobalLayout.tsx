import type { FC } from "react";
import { Outlet } from "react-router-dom";

import { Surface } from "../../1_atoms/surface/Surface";
import { Header } from "../../3_organisms/header/Header";

import styles from "./GlobalLayout.module.scss";

export const GlobalLayout: FC = () => {
	return (
		<div className={styles.globalLayoutContainer}>
			<Header />
			<main className={styles.mainContainer}>
				<Surface className={styles.globalLayoutOutletContainer}>
					<Outlet />
				</Surface>
			</main>
			<footer />
		</div>
	);
};
