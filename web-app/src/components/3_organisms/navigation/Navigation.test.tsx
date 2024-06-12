import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { Navigation } from "./Navigation";

describe("Navigation", () => {
	test("should render a navigation", () => {
		render(<Navigation />);

		expect(screen.getByRole("navigation")).toBeInTheDocument();
	});

	test("should render a list of links", () => {
		render(<Navigation />);

		expect(screen.getByRole("list")).toBeInTheDocument();
	});
});
