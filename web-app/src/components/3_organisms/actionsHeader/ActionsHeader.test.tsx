import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test, vi } from "vitest";
import { ActionsHeader } from "./ActionsHeader";

describe("ActionsHeader", () => {
	test("Should render title", () => {
		render(<ActionsHeader title="test title" />);

		expect(screen.getByText("test title")).toBeInTheDocument();
	});

	test("Should call close function", () => {
		const close = vi.fn();
		render(<ActionsHeader title="test title" close={close} />);

		screen.getByLabelText("close").click();

		expect(close).toBeCalled();
	});

	test("Should not render close button if no close", () => {
		render(<ActionsHeader title="test title" />);

		expect(screen.queryByLabelText("close")).not.toBeInTheDocument();
	});
});
