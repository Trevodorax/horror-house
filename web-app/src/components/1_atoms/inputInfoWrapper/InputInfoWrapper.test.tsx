import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { InputInfoWrapper } from "./InputInfoWrapper";

describe("InputInfoWrapper", () => {
	test("renders children with label", () => {
		render(
			<InputInfoWrapper label="Username" errorMessage="error">
				<div />
			</InputInfoWrapper>,
		);

		expect(screen.getByText("Username")).toBeInTheDocument();
	});

	test("renders children with error message", () => {
		render(
			<InputInfoWrapper label="Username" errorMessage="Invalid username">
				<div />
			</InputInfoWrapper>,
		);

		expect(screen.getByText("Invalid username")).toBeInTheDocument();
	});
});
