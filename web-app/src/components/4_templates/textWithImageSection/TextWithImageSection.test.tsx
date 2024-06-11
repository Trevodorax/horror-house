import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { TextWithImageSection } from "./TextWithImageSection";

describe("TextWithImageSection", () => {
  test("Should display given text", () => {
    render(<TextWithImageSection content="test content" imageUrl="test.image.jpg"  />);

    expect(screen.getByText('test content')).toBeInTheDocument();
  });

  test("Should display given image", () => {
    render(<TextWithImageSection content="test content" imageUrl="test.image.jpg" />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringContaining('test.image.jpg'));
  });
})