import { createBrowserRouter } from "react-router-dom";

import { GlobalLayout } from "./components/4_templates/globalLayout/GlobalLayout";
import { Home } from "./components/5_pages/home/Home";

export const navItems = [
	{
		label: "Home",
		path: "/",
	},
	{
		label: "CGU",
		path: "/cgu",
	},
	{
		label: "Contact",
		path: "/contact",
	},
	{
		label: "Book",
		path: "/booking",
	},
	{
		label: "Sessions",
		path: "/sessions",
	}
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
			{
				path: "cgu",
				element: <div>CGU</div>,
			},
			{
				path: "contact",
				element: <div>Contact</div>,
			},
			{
				path: "sessions",
				element: <div>Sessions</div>,
				children: [
					{
						path: ":id",
						element: <div>Session</div>,
					}
				]
			},
			{
				path: "booking",
				element: <div>Booking</div>,
				children: [
					{
						path: ":id",
						element: <div>Booking</div>,
					}
				]
			}
		],
	},
]);
