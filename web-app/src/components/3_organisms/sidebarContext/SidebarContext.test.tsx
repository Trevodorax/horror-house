import { act, render, screen } from "@/tests/react-testing-library";
import { describe, expect, it } from "vitest";
import { SidebarProvider, useSidebar } from "./SidebarContext";

// Helper component to test the context
const TestComponent = () => {
	const { isOpen, toggleSidebar, openSidebar, closeSidebar } = useSidebar();
	return (
		<div>
			<p data-testid="sidebar-state">{isOpen ? "open" : "closed"}</p>
			<button type="button" onClick={toggleSidebar} data-testid="toggle-btn">
				Toggle
			</button>
			<button type="button" onClick={openSidebar} data-testid="open-btn">
				Open
			</button>
			<button type="button" onClick={closeSidebar} data-testid="close-btn">
				Close
			</button>
		</div>
	);
};

describe("SidebarProvider", () => {
	it("should initialize with the sidebar closed", () => {
		render(
			<SidebarProvider>
				<TestComponent />
			</SidebarProvider>,
		);
		expect(screen.getByTestId("sidebar-state").textContent).toBe("closed");
	});

	it("should toggle the sidebar state", () => {
		render(
			<SidebarProvider>
				<TestComponent />
			</SidebarProvider>,
		);

		const toggleBtn = screen.getByTestId("toggle-btn");

		// Initially closed
		expect(screen.getByTestId("sidebar-state").textContent).toBe("closed");

		// Open sidebar
		act(() => {
			toggleBtn.click();
		});
		expect(screen.getByTestId("sidebar-state").textContent).toBe("open");

		// Close sidebar
		act(() => {
			toggleBtn.click();
		});
		expect(screen.getByTestId("sidebar-state").textContent).toBe("closed");
	});

	it("should open the sidebar", () => {
		render(
			<SidebarProvider>
				<TestComponent />
			</SidebarProvider>,
		);

		const openBtn = screen.getByTestId("open-btn");
		act(() => {
			openBtn.click();
		});
		expect(screen.getByTestId("sidebar-state").textContent).toBe("open");
	});

	it("should close the sidebar", () => {
		render(
			<SidebarProvider>
				<TestComponent />
			</SidebarProvider>,
		);

		const openBtn = screen.getByTestId("open-btn");
		const closeBtn = screen.getByTestId("close-btn");

		act(() => {
			openBtn.click();
		});
		expect(screen.getByTestId("sidebar-state").textContent).toBe("open");

		act(() => {
			closeBtn.click();
		});
		expect(screen.getByTestId("sidebar-state").textContent).toBe("closed");
	});

	it("should throw an error if useSidebar is used outside of SidebarProvider", () => {
		const ErrorComponent = () => {
			try {
				useSidebar();
				return <div>No error</div>;
			} catch (e: unknown) {
				if (e instanceof Error) {
					return <div>{e.message}</div>;
				}
			}
		};

		const { container } = render(<ErrorComponent />);
		expect(container.textContent).toBe(
			"useSidebar must be used within a SidebarProvider",
		);
	});
});
