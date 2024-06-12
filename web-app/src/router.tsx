import { createBrowserRouter } from "react-router-dom";

import { GlobalLayout } from "./components/4_templates/globalLayout/GlobalLayout";
import { Home } from "./components/5_pages/home/Home";

export const navItems = [
	{
		label: "Home",
		path: "/",
	},
	{
		label: "About",
		path: "/about",
	},
	{
		label: "Contact",
		path: "/contact",
	},
];

export const router = createBrowserRouter([
	{
		path: "/",
		element: <GlobalLayout />,
		children: [
			{
				path: "",
				element: <Home />,
			},
		],
	},
]);
