import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { SidebarProvider } from "../sidebarContext/SidebarContext";
import { ThemeProvider } from "../themeContext/ThemeContext";
import { GlobalHeader } from "./GlobalHeader";

describe("Header", () => {
	test("should render an actual header", () => {
		render(
			<ThemeProvider>
				<SidebarProvider>
					<GlobalHeader />
				</SidebarProvider>
			</ThemeProvider>,
		);

		expect(screen.getByRole("banner")).toBeInTheDocument();
	});
});
