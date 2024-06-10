import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { Header } from "./Header";

describe("Header", () => {
	test("should render an actual header", () => {
		render(<Header />);

		expect(screen.getByRole("banner")).toBeInTheDocument();
	});
});
