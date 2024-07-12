import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { ControlledTextArea } from "./ControlledTextArea";

describe("Input", () => {
	test("renders input with custom class", () => {
		render(<ControlledTextArea label="Label" className="custom-class" />);

		expect(screen.getByRole("textbox")).toHaveClass("custom-class");
	});

	test("accepts input props", () => {
		render(<ControlledTextArea label="Label" placeholder="Username" />);

		expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
	});

	test("forwards ref", () => {
		const ref = { current: null };
		render(<ControlledTextArea label="Label" ref={ref} />);

		expect(ref.current).not.toBeNull();
	});
});
