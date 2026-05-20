import { describe, it, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { renderWithRouter } from "@/test/render";
import { News } from "./News";

describe("News", () => {
  it("shows loader while fetching", () => {
    renderWithRouter(<News />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders news articles after loading", async () => {
    renderWithRouter(<News />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    expect(screen.getByText("News Article One")).toBeInTheDocument();
    expect(screen.getByText("News Article Two")).toBeInTheDocument();
  });

  it("renders publication link when available", async () => {
    renderWithRouter(<News />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    const link = screen.getByText("THE GUARDIAN");
    expect(link).toHaveAttribute("href", "https://example.com/article");
  });
});
