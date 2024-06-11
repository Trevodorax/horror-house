import * as routerModule from "@/router";
import { render, screen } from "@/tests/react-testing-library";
import { describe, expect, test, vi } from "vitest";
import { NavigationLinkBar } from "./NavigationLinkBar";


describe("NavigationLinkBar", () => {
  test("Should render link", () => {
    vi.spyOn(routerModule, 'navItems', 'get').mockReturnValue([
      {
        label: 'test',
        path: 'test'
      }
    ]);

    render(<NavigationLinkBar />)
    expect(screen.getByText('test')).toBeInTheDocument();
  })

  test("Should render multiple links", () => {
    vi.spyOn(routerModule, 'navItems', 'get').mockReturnValue([
      {
        label: 'test1',
        path: 'test1'
      },
      {
        label: 'test2',
        path: 'test2'
      }
    ]);

    render(<NavigationLinkBar />)

    expect(screen.getAllByRole('link')).toHaveLength(2);
  })
})