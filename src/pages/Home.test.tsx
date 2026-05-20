import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "@/test/render";
import { Home } from "./Home";

describe("Home", () => {
  it("renders navigation circles", () => {
    renderWithRouter(<Home />);

    expect(screen.getByText("Company")).toBeInTheDocument();
    expect(screen.getByText("News")).toBeInTheDocument();
    expect(screen.getByText("Shows")).toBeInTheDocument();
    expect(screen.getByText("People")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders logo", () => {
    renderWithRouter(<Home />);
    expect(screen.getByAltText("Moonage logo")).toBeInTheDocument();
  });

  it("links circles to correct routes", () => {
    renderWithRouter(<Home />);

    const companyLink = screen.getByText("Company").closest("a");
    expect(companyLink).toHaveAttribute("href", "/company");

    const showsLink = screen.getByText("Shows").closest("a");
    expect(showsLink).toHaveAttribute("href", "/shows");
  });
});
