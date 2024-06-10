import { cleanup } from "@/tests/react-testing-library";
import * as matchers from "@testing-library/jest-dom/matchers";
import { afterEach, expect } from "vitest";

expect.extend(matchers);

afterEach(() => {
	cleanup();
});
