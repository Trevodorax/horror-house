import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { GlobalFooter } from "./GlobalFooter";

describe("GlobalFooter", () => {
	test("renders global footer", () => {
		render(<GlobalFooter />);

		expect(screen.getByRole("contentinfo")).toBeInTheDocument();
	});
});
