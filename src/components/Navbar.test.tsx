import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "@/test/render";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("renders all navigation links", () => {
    renderWithRouter(<Navbar />);

    expect(screen.getByText("Company")).toBeInTheDocument();
    expect(screen.getByText("News")).toBeInTheDocument();
    expect(screen.getByText("Shows")).toBeInTheDocument();
    expect(screen.getByText("People")).toBeInTheDocument();
    expect(screen.getByText("Daydream")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders logo link to home", () => {
    renderWithRouter(<Navbar />);

    const logoImg = screen.getByAltText("Moonage Pictures Logo");
    expect(logoImg).toBeInTheDocument();
    expect(logoImg.closest("a")).toHaveAttribute("href", "/");
  });

  it("highlights active nav item based on route", () => {
    renderWithRouter(<Navbar />, { route: "/company" });

    const companyLink = screen.getByText("Company");
    expect(companyLink.className).toContain("bg-brand-red");
  });

  it("highlights shows for show sub-routes", () => {
    renderWithRouter(<Navbar />, { route: "/shows/curfew" });

    const showsLink = screen.getByText("Shows");
    expect(showsLink.className).toContain("bg-brand-pink");
  });
});
