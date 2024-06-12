import type { FC } from "react";
import { Outlet } from "react-router-dom";

import { Surface } from "../../1_atoms/surface/Surface";
import { GlobalHeader } from "../../3_organisms/globalHeader/GlobalHeader";

import { GlobalFooter } from "@/components/3_organisms/globalFooter/GlobalFooter";
import styles from "./GlobalLayout.module.scss";

export const GlobalLayout: FC = () => {
	return (
		<div className={styles.globalLayoutContainer}>
			<GlobalHeader />
			<main className={styles.mainContainer}>
				<Surface className={styles.globalLayoutOutletContainer}>
					<Outlet />
				</Surface>
			</main>
			<GlobalFooter />
		</div>
	);
};
