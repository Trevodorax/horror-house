import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { ContentWithImageSection } from "./ContentWithImageSection";

describe("ContentWithImageSection", () => {
	test("Should display given text", () => {
		render(
			<ContentWithImageSection content="test content" imageUrl="test.image.jpg" />,
		);

		expect(screen.getByText("test content")).toBeInTheDocument();
	});

	test("Should display given image", () => {
		render(
			<ContentWithImageSection content="test content" imageUrl="test.image.jpg" />,
		);

		expect(screen.getByRole("img")).toBeInTheDocument();
		expect(screen.getByRole("img")).toHaveAttribute(
			"src",
			expect.stringContaining("test.image.jpg"),
		);
	});
});
