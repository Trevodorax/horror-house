import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
	test("renders input with label", () => {
		render(<Input label="Username" />);

		expect(screen.getByText("Username")).toBeInTheDocument();
	});

	test("renders input with error message", () => {
		render(<Input errorMessage="Invalid username" />);

		expect(screen.getByText("Invalid username")).toBeInTheDocument();
	});

	test("renders input with custom class", () => {
		render(<Input className="custom-class" />);

		expect(screen.getByRole("textbox")).toHaveClass("custom-class");
	});

	test("accepts input props", () => {
		render(<Input placeholder="Username" />);

		expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
	});

	test("forwards ref", () => {
		const ref = { current: null };
		render(<Input ref={ref} />);

		expect(ref.current).not.toBeNull();
	});
});
