import { render } from "@/tests/react-testing-library";
import { describe, test } from "vitest";
import { Home } from "./Home";

describe("Home", () => {
  test("Should not crash", () => {
    render(<Home />);
  });
})
