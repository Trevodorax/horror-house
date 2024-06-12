import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { SessionInfo } from "./SessionInfo";

describe("SessionInfo", () => {
	test("Should render session title and description", () => {
		render(
			<SessionInfo
				session={{
					title: "title test",
					description: "description test",
					imageUrl: "image.url.test",
				}}
			/>,
		);

		expect(screen.getByText("title test")).toBeInTheDocument();
		expect(screen.getByText("description test")).toBeInTheDocument();
		expect(screen.getByRole("img")).toHaveAttribute("src", "image.url.test");
	});
});
