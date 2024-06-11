import type { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./styles/colors/colors.css";
import "./styles/fonts/inter.css"

export const App: FC = () => {
	return <RouterProvider router={router} />;
};
