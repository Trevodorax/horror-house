import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test } from "vitest";
import { SideBar } from "./SideBar";
import styles from './SideBar.module.scss'

describe("SideBar", () => {
  test("Should render children", () => {
    render(
      <SideBar onClose={() => {}} open={true}>
        <div data-testid="content" />
      </SideBar>,
    );
    expect(screen.getByTestId("content")).toBeInTheDocument();
  })

  test("Should render with open class", () => {
    render(
      <SideBar data-testid='aside' onClose={() => {}} open={true}>
        <div data-testid="content" />
      </SideBar>,
    );
    expect(screen.getByTestId("aside")).toHaveClass(styles.open);
  })

  test('Should be an aside element', () => {
    render(
      <SideBar onClose={() => {}} open={true}>
        <div data-testid="content" />
      </SideBar>,
    );
    expect(screen.getByRole('complementary')).toBeInTheDocument();
  })

  test("Should not render with open class", () => {
    render(
      <SideBar data-testid='aside' onClose={() => {}} open={false}>
        <div data-testid="content" />
      </SideBar>,
    );
    expect(screen.getByTestId("aside")).not.toHaveClass(styles.open);
  })

  test("Should accept div props", () => {
    render(
      <SideBar data-testid="aside" id="sidebar" onClose={() => {}} open={true}>
        <div />
      </SideBar>,
    );
    expect(screen.getByTestId("aside")).toHaveAttribute("id", "sidebar");
  });

  test("Should handle className prop", () => {
    render(
      <SideBar className="test" onClose={() => {}} open={true}>
        <div />
      </SideBar>,
    );
    expect(screen.getByRole('complementary')).toHaveClass("test");
    expect(screen.getByRole('complementary')).toHaveClass(styles.open);
  });
})