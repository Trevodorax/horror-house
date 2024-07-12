import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { ControlledInput } from "./ControlledInput";

describe("Input", () => {
	test("renders input with custom class", () => {
		render(<ControlledInput className="custom-class" />);

		expect(screen.getByRole("textbox")).toHaveClass("custom-class");
	});

	test("accepts input props", () => {
		render(<ControlledInput placeholder="Username" />);

		expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
	});

	test("forwards ref", () => {
		const ref = { current: null };
		render(<ControlledInput ref={ref} />);

		expect(ref.current).not.toBeNull();
	});
});
