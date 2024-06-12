import { type RenderOptions, render } from "@testing-library/react";
import type { ReactElement, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

const ProviderWrapper = ({ children }: { children: ReactNode }) => (
	<BrowserRouter>{children}</BrowserRouter>
);

const customRender = (ui: ReactElement, options?: RenderOptions) =>
	render(ui, { wrapper: ProviderWrapper, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
