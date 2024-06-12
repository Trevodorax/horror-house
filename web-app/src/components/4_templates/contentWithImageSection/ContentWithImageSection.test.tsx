import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { ContentWithImageSection } from "./ContentWithImageSection";

describe("ContentWithImageSection", () => {
	test("Should display given text", () => {
		render(
			<ContentWithImageSection imageUrl="test.image.jpg">test content</ContentWithImageSection>,
		);

		expect(screen.getByText("test content")).toBeInTheDocument();
	});

	test("Should display given image", () => {
		render(
			<ContentWithImageSection imageUrl="test.image.jpg" >Text content</ContentWithImageSection>,
		);

		expect(screen.getByRole("img")).toBeInTheDocument();
		expect(screen.getByRole("img")).toHaveAttribute(
			"src",
			expect.stringContaining("test.image.jpg"),
		);
	});
});
