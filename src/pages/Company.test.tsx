import { describe, it, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { renderWithRouter } from "@/test/render";
import { Company } from "./Company";

describe("Company", () => {
  it("shows loader while fetching", () => {
    renderWithRouter(<Company />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders page content after loading", async () => {
    renderWithRouter(<Company />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    expect(screen.getByText("Test Page")).toBeInTheDocument();
    expect(screen.getByText("Page body content")).toBeInTheDocument();
  });

  it("renders company image", async () => {
    renderWithRouter(<Company />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    expect(screen.getByAltText("Moonage Alligator")).toBeInTheDocument();
  });
});
