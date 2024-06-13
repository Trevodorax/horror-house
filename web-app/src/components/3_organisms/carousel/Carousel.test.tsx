import { render, screen } from "@/tests/react-testing-library";
import { act } from "react";
import { describe, expect, test } from "vitest";
import { Carousel } from "./Carousel";

describe("Carousel", () => {
	test("Should render carousel", () => {
		render(<Carousel items={[<div key="1">test</div>]} />);
	});

	test("Should handle next and previous buttons", () => {
		render(
			<Carousel
				items={[<div key="1">test 1</div>, <div key="2">test 2</div>]}
			/>,
		);

		expect(screen.getByText("test 1")).toBeInTheDocument();
		act(() => {
			screen.getByLabelText("next item").click();
		});
		expect(screen.getByText("test 2")).toBeInTheDocument();
		act(() => {
			screen.getByLabelText("previous item").click();
		});
		expect(screen.getByText("test 1")).toBeInTheDocument();
	});

	test("Should handle next and previous buttons out of bounds", () => {
		render(
			<Carousel
				items={[<div key="1">test 1</div>, <div key="2">test 2</div>]}
			/>,
		);

		expect(screen.getByText("test 1")).toBeInTheDocument();
		act(() => {
			screen.getByLabelText("previous item").click();
		});
		expect(screen.getByText("test 2")).toBeInTheDocument();
		act(() => {
			screen.getByLabelText("next item").click();
		});
		expect(screen.getByText("test 1")).toBeInTheDocument();
	});
});
