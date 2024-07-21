import { createBrowserRouter } from "react-router-dom";

import { GlobalLayout } from "./components/4_templates/globalLayout/GlobalLayout";
import { Cgu } from "./components/5_pages/cgu/Cgu";
import { Contact } from "./components/5_pages/contact/Contact";
import { Home } from "./components/5_pages/home/Home";
import { Employees } from "./components/5_pages/employees/Employees";
import { Login } from "./components/5_pages/login/Login";

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
	},
	{
		label: "Employees",
		path: "/employees"
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
				element: <Cgu />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "login",
				element: <Login />
			},
			{
				path: "employees",
				element: <Employees />
			},
			{
				path: "sessions",
				element: <div>Sessions</div>,
				children: [
					{
						path: ":id",
						element: <div>Session</div>,
					},
				],
			},
			{
				path: "booking",
				element: <div>Booking</div>,
				children: [
					{
						path: ":id",
						element: <div>Booking</div>,
					},
				],
			},
		],
	},
]);
