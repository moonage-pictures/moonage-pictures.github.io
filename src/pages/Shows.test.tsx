import { describe, it, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { renderWithRouter } from "@/test/render";
import { Shows } from "./Shows";

describe("Shows", () => {
  it("shows loader while fetching", () => {
    renderWithRouter(<Shows />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders gallery images after loading", async () => {
    renderWithRouter(<Shows />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    expect(screen.getByAltText("Gallery 1")).toBeInTheDocument();
    expect(screen.getByAltText("Gallery 2")).toBeInTheDocument();
  });

  it("links gallery images to show pages", async () => {
    renderWithRouter(<Shows />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    const link = screen.getByAltText("Gallery 1").closest("a");
    expect(link).toHaveAttribute("href", "/shows/curfew");
  });
});
