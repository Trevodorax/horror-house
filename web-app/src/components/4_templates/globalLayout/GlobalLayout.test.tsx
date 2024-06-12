import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { GlobalLayout } from "./GlobalLayout";

describe("GlobalLayout", () => {
	test("Should have the basic page elements", () => {
		render(<GlobalLayout />);

		expect(screen.getByRole("banner")).toBeInTheDocument();
		expect(screen.getByRole("main")).toBeInTheDocument();
		expect(screen.getByRole("contentinfo")).toBeInTheDocument();
	});
});
