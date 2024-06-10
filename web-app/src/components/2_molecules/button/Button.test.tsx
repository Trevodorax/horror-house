import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
	test("should render a button", () => {
		render(<Button>Click me</Button>);

		expect(screen.getByRole("button")).toBeInTheDocument();
	});

	test("should handle button props", () => {
		const handleClick = vi.fn();
		render(
			<Button onClick={handleClick} data-testid="button">
				Click me
			</Button>,
		);

		screen.getByTestId("button").click();

		expect(handleClick).toBeCalled();
	});
});
