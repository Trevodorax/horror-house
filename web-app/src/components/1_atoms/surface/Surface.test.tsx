import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@/tests/react-testing-library";

import { Surface } from "./Surface";
import styles from "./Surface.module.scss";

describe("Surface", () => {
	test("Should render children", () => {
		render(
			<Surface>
				<div data-testid="content" />
			</Surface>,
		);
		expect(screen.getByTestId("content")).toBeInTheDocument();
	});

	test("Should render with default background", () => {
		render(
			<Surface data-testid="content">
				<div />
			</Surface>,
		);
		expect(screen.getByTestId("content")).toHaveClass(styles.default);
	});

	test("Should use background prop", () => {
		render(
			<Surface background="primary" data-testid="content">
				<div />
			</Surface>,
		);
		expect(screen.getByTestId("content")).toHaveClass(styles.primary);
	});

	test("Should accept div props", () => {
		render(
			<Surface data-testid="content" id="surface">
				<div />
			</Surface>,
		);
		expect(screen.getByTestId("content")).toHaveAttribute("id", "surface");
	});

	test("Should handle className prop", () => {
		render(
			<Surface className="test" data-testid="content">
				<div />
			</Surface>,
		);
		expect(screen.getByTestId("content")).toHaveClass("test");
		expect(screen.getByTestId("content")).toHaveClass(styles.default);
	});
});
