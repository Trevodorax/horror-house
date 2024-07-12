import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { SidebarProvider } from "../sidebarContext/SidebarContext";
import { ToggleSidebarButton } from "./ToggleSidebarButton";

describe("Navigation", () => {
	test("should render a navigation", () => {
		render(
			<SidebarProvider>
				<ToggleSidebarButton />
			</SidebarProvider>,
		);

		expect(screen.getByRole("navigation")).toBeInTheDocument();
	});

	test("should render a list of links", () => {
		render(
			<SidebarProvider>
				<ToggleSidebarButton />
			</SidebarProvider>,
		);

		expect(screen.getByRole("list")).toBeInTheDocument();
	});
});
