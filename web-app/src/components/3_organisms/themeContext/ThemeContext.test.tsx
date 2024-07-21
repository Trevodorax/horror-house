import { act, render, screen } from "@/tests/react-testing-library";
import { describe, expect, it } from "vitest";
import { ThemeProvider, useTheme } from "./ThemeContext";

// Helper component to test the context
const TestComponent = () => {
	const { toggleTheme, isDark } = useTheme();
	return (
		<div>
			<p data-testid="theme-state">{isDark ? "dark" : "light"}</p>
			<button type="button" onClick={toggleTheme} data-testid="toggle-btn">
				Toggle
			</button>
		</div>
	);
};

describe("ThemeProvider", () => {
	it("should initialize with the theme light", () => {
		render(
			<ThemeProvider>
				<TestComponent />
			</ThemeProvider>,
		);
		expect(screen.getByTestId("theme-state").textContent).toBe("dark");
	});

	it("should toggle the theme state", () => {
		render(
			<ThemeProvider>
				<TestComponent />
			</ThemeProvider>,
		);

		const toggleBtn = screen.getByTestId("toggle-btn");

		// Initially light
		expect(screen.getByTestId("theme-state").textContent).toBe("dark");

		// toggle theme
		act(() => {
			toggleBtn.click();
		});
		expect(screen.getByTestId("theme-state").textContent).toBe("light");

		// toggle theme
		act(() => {
			toggleBtn.click();
		});
		expect(screen.getByTestId("theme-state").textContent).toBe("dark");
	});

	it("should throw an error if useTheme is used outside of ThemeProvider", () => {
		const ErrorComponent = () => {
			try {
				useTheme();
				return <div>No error</div>;
			} catch (e: unknown) {
				if (e instanceof Error) {
					return <div>{e.message}</div>;
				}
			}
		};

		const { container } = render(<ErrorComponent />);
		expect(container.textContent).toBe(
			"useTheme must be used within a ThemeProvider",
		);
	});
});
