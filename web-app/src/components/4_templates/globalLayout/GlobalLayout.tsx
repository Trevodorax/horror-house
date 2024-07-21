import type { FC } from "react";
import { Outlet } from "react-router-dom";

import { Surface } from "../../1_atoms/surface/Surface";
import { GlobalHeader } from "../../3_organisms/globalHeader/GlobalHeader";

import { GlobalFooter } from "@/components/3_organisms/globalFooter/GlobalFooter";
import { SidebarProvider } from "@/components/3_organisms/sidebarContext/SidebarContext";
import { ThemeProvider } from "@/components/3_organisms/themeContext/ThemeContext";
import styles from "./GlobalLayout.module.scss";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/hooks/queries/queryClient";
import { Toaster } from "react-hot-toast";

export const GlobalLayout: FC = () => {
	return (
		<ThemeProvider>
			<SidebarProvider>
				<QueryClientProvider client={queryClient}>
					<Toaster />
					<div className={styles.globalLayoutContainer}>
						<GlobalHeader />
						<main className={styles.mainContainer}>
							<Surface className={styles.globalLayoutOutletContainer}>
								<Outlet />
							</Surface>
						</main>
						<GlobalFooter />
					</div>
				</QueryClientProvider>
			</SidebarProvider>
		</ThemeProvider>
	);
};
