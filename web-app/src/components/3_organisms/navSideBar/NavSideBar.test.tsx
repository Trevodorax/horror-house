import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { NavSideBar } from "./NavSideBar";

describe("NavSideBar", () => {
	test("Should render", () => {
		render(<NavSideBar open={true} onClose={() => {}} />);

		expect(screen.getByRole("complementary")).toBeInTheDocument();
	});
});
