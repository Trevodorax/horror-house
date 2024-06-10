import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { Home } from "./Home";

describe("Home", () => {
  test("Should render", () => {
    render(<Home />);

    expect(screen.getByText("This is my app")).toBeInTheDocument();
  });
})