import { describe, it, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { renderWithRouter } from "@/test/render";
import { Contact } from "./Contact";

describe("Contact", () => {
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
});
