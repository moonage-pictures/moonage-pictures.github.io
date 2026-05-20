import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "@/test/render";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders copyright with current year", () => {
    renderWithRouter(<Footer />);

    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("renders social media links", () => {
    renderWithRouter(<Footer />);

    expect(screen.getByLabelText("Facebook")).toHaveAttribute("href", "https://www.facebook.com/MoonagePics/");
    expect(screen.getByLabelText("X/Twitter")).toHaveAttribute("href", "https://twitter.com/moonagepictures");
    expect(screen.getByLabelText("Instagram")).toHaveAttribute("href", "https://www.instagram.com/moonagepictures/");
  });

  it("renders privacy policy link", () => {
    renderWithRouter(<Footer />);

    expect(screen.getByText("Privacy Policy")).toHaveAttribute("href", "/privacy-policy");
  });

  it("shows designer credit on home page", () => {
    renderWithRouter(<Footer />, { route: "/" });

    expect(screen.getByText(/richardtzanov\.com/)).toBeInTheDocument();
  });

  it("hides designer credit on non-home pages", () => {
    renderWithRouter(<Footer />, { route: "/company" });

    expect(screen.queryByText(/Designed by/)).not.toBeInTheDocument();
  });
});
