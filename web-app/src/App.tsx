import type { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./styles/colors/colors.css";

export const App: FC = () => {
	return <RouterProvider router={router} />;
};
