import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { SidebarProvider } from "../sidebarContext/SidebarContext";
import { GlobalHeader } from "./GlobalHeader";

describe("Header", () => {
	test("should render an actual header", () => {
		render(
			<SidebarProvider>
				<GlobalHeader />
			</SidebarProvider>,
		);

		expect(screen.getByRole("banner")).toBeInTheDocument();
	});
});
