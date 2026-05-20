import { describe, it, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { renderWithRouter } from "@/test/render";
import { Daydream } from "./Daydream";

describe("Daydream", () => {
  it("shows loader while fetching", () => {
    renderWithRouter(<Daydream />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders page content after loading", async () => {
    renderWithRouter(<Daydream />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    expect(screen.getByText("Test Page")).toBeInTheDocument();
    expect(screen.getByText("Page body content")).toBeInTheDocument();
  });
});
