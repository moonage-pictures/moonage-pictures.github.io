import { describe, it, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { renderWithRouter } from "@/test/render";
import { People } from "./People";

describe("People", () => {
  it("shows loader while fetching", () => {
    renderWithRouter(<People />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders page content after loading", async () => {
    renderWithRouter(<People />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    expect(screen.getByText("Test Page")).toBeInTheDocument();
    expect(screen.getByText("Page body content")).toBeInTheDocument();
  });
});
