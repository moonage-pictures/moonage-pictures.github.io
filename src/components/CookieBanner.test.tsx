import { describe, it, expect, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "@/test/render";
import { CookieBanner } from "./CookieBanner";

describe("CookieBanner", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders when no consent decision exists in localStorage", () => {
    renderWithRouter(<CookieBanner />);
    expect(
      screen.getByText(/By using this site, you agree to our/),
    ).toBeInTheDocument();
  });

  it("does not render when consent is true", () => {
    localStorage.setItem("consent", "true");
    renderWithRouter(<CookieBanner />);
    expect(
      screen.queryByText(/By using this site, you agree to our/),
    ).not.toBeInTheDocument();
  });

  it("does not render when consent is false", () => {
    localStorage.setItem("consent", "false");
    renderWithRouter(<CookieBanner />);
    expect(
      screen.queryByText(/By using this site, you agree to our/),
    ).not.toBeInTheDocument();
  });

  it("links to the privacy policy page", () => {
    renderWithRouter(<CookieBanner />);
    const link = screen.getByRole("link", { name: "terms and conditions" });
    expect(link).toHaveAttribute("href", "/privacy-policy");
  });

  it("sets consent to true and hides banner when Accept All is clicked", async () => {
    const user = userEvent.setup();
    renderWithRouter(<CookieBanner />);

    await user.click(screen.getByRole("button", { name: "Accept All" }));

    expect(localStorage.getItem("consent")).toBe("true");
    expect(
      screen.queryByText(/By using this site, you agree to our/),
    ).not.toBeInTheDocument();
  });

  it("sets consent to false and hides banner when Reject All is clicked", async () => {
    const user = userEvent.setup();
    renderWithRouter(<CookieBanner />);

    await user.click(screen.getByRole("button", { name: "Reject All" }));

    expect(localStorage.getItem("consent")).toBe("false");
    expect(
      screen.queryByText(/By using this site, you agree to our/),
    ).not.toBeInTheDocument();
  });

  it("renders a backdrop overlay that blocks page interaction", () => {
    renderWithRouter(<CookieBanner />);
    expect(screen.getByTestId("cookie-backdrop")).toBeInTheDocument();
  });

  it("does not render backdrop when consent has been given", () => {
    localStorage.setItem("consent", "true");
    renderWithRouter(<CookieBanner />);
    expect(screen.queryByTestId("cookie-backdrop")).not.toBeInTheDocument();
  });
});
