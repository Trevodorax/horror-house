import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { Contact } from "./Contact";

describe("Contact", () => {
	test("renders contact page", () => {
		render(<Contact />);

		expect(screen.getByText("Contact us by any means ...")).toBeInTheDocument();
	});
});
