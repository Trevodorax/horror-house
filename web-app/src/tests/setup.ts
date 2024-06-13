import { cleanup } from "@/tests/react-testing-library";
import * as matchers from "@testing-library/jest-dom/matchers";
import { afterEach, expect } from "vitest";

expect.extend(matchers);

global.IntersectionObserver = class IntersectionObserver {
	observe() {
		return null;
	}

	disconnect() {
		return null;
	}

	unobserve() {
		return null;
	}

	takeRecords() {
		return [];
	}

	root: null | Element | Document = null;

	rootMargin = "";

	thresholds: number[] = [];
};

afterEach(() => {
	cleanup();
});
