import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { GlobalHeader } from "./GlobalHeader";

describe("Header", () => {
	test("should render an actual header", () => {
		render(<GlobalHeader />);

		expect(screen.getByRole("banner")).toBeInTheDocument();
	});
});
