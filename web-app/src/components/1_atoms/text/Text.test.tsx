import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@/tests/react-testing-library";

import { Text } from "./Text";
import styles from "./Text.module.scss";

describe("Text", () => {
	test("Should render text", () => {
		render(<Text>Test text</Text>);
		expect(screen.getByText("Test text")).toBeInTheDocument();
	});

	test("Should accept className prop", () => {
		render(<Text className="testClass">Test text</Text>);
		expect(screen.getByText("Test text")).toHaveClass("testClass");
	});

	describe("Text variants", () => {
		test("Should accept variant prop", () => {
			render(<Text variant="primary">Test text</Text>);
			expect(screen.getByRole("paragraph")).toHaveClass(
				styles["textVariant-primary"],
			);
		});

		test("Should use default variant by default", () => {
			render(<Text>Test text</Text>);
			expect(screen.getByRole("paragraph")).toHaveClass(
				styles["textVariant-default"],
			);
		});
	});

	describe("Text types", () => {
		test("Should use text by default", () => {
			render(<Text>Test text</Text>);
			expect(screen.getByRole("paragraph")).toBeInTheDocument();
		});

		test("Should render page Heading properly", () => {
			render(<Text type="pageHeading">Test text</Text>);
			expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
		});

		test("Should render section Heading properly", () => {
			render(<Text type="sectionHeading">Test text</Text>);
			expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
		});

		test("Should render sub section Heading properly", () => {
			render(<Text type="subSectionHeading">Test text</Text>);
			expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
		});

		test("Should render simple text properly", () => {
			render(<Text type="simpleText">Test text</Text>);
			expect(screen.getByRole("paragraph")).toBeInTheDocument();
		});
	});
});
