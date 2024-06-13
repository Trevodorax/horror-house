import { render } from "@/tests/react-testing-library";
import { describe, test } from "vitest";
import { Cgu } from "./Cgu";

describe("Cgu", () => {
	test("renders with no crash", () => {
		render(<Cgu />);
	});
});
