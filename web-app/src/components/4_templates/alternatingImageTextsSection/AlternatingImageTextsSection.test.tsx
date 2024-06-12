import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { AlternatingImageTextsSection } from "./AlternatingImageTextsSection";
import styles from "./AlternatingImageTextsSection.module.scss";

describe("AlternatingImageTextsSection", () => {
	test("renders the correct number of image-text sections", () => {
		render(
			<AlternatingImageTextsSection
				imageTexts={[
					{
						text: "text1",
						imageUrl: "url1",
					},
					{
						text: "text2",
						imageUrl: "url2",
					},
				]}
			/>,
		);

		expect(screen.getAllByRole("img")).toHaveLength(2);
	});

	test("One in two sections should have the reversed class", () => {
		render(
			<AlternatingImageTextsSection
				imageTexts={[
					{
						text: "text1",
						imageUrl: "url1",
					},
					{
						text: "text2",
						imageUrl: "url2",
					},
				]}
			/>,
		);

		const sections = screen.getAllByRole("img").map((img) => img.parentElement);
		expect(sections[0]).not.toHaveClass(styles.reversed);
		expect(sections[1]).toHaveClass(styles.reversed);
	});
});
