import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { LinkListItem } from "./LinkListItem";

describe("LinkListItem", () => {
	test("Should render", () => {
		render(<LinkListItem item={{ label: "Home", path: "/" }} />);

		expect(screen.getByRole("listitem")).toBeInTheDocument();
	});

	test("Should navigate to the correct path", () => {
		render(<LinkListItem item={{ label: "test link", path: "/test/route" }} />);

		screen.getByText("test link").click();

		expect(window.location.pathname).toBe("/test/route");
	});
});
