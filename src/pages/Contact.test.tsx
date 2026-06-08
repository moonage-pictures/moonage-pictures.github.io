import { describe, it, expect, beforeEach } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { renderWithRouter } from "@/test/render";
import { Contact } from "./Contact";

describe("Contact", () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem("consent", "true");
  });

  it("shows loader while fetching", () => {
    renderWithRouter(<Contact />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders contact information after loading", async () => {
    renderWithRouter(<Contact />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("+44 20 1234 5678")).toBeInTheDocument();
    expect(screen.getByText("info@test.com")).toBeInTheDocument();
  });

  it("renders phone link", async () => {
    renderWithRouter(<Contact />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    const phoneLink = screen.getByText("+44 20 1234 5678");
    expect(phoneLink).toHaveAttribute("href", "tel:+44 20 1234 5678");
  });

  it("renders email link", async () => {
    renderWithRouter(<Contact />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    const emailLink = screen.getByText("info@test.com");
    expect(emailLink).toHaveAttribute("href", "mailto:info@test.com");
  });

  it("renders Google Maps iframe when consent is true", async () => {
    renderWithRouter(<Contact />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    expect(screen.getByTitle("Office Location")).toBeInTheDocument();
  });

  it("does not render Google Maps iframe when consent is not given", async () => {
    localStorage.removeItem("consent");
    renderWithRouter(<Contact />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    expect(screen.queryByTitle("Office Location")).not.toBeInTheDocument();
  });

  it("does not render Google Maps iframe when consent is false", async () => {
    localStorage.setItem("consent", "false");
    renderWithRouter(<Contact />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    expect(screen.queryByTitle("Office Location")).not.toBeInTheDocument();
  });
});
