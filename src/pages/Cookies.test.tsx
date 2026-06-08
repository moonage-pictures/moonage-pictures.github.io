import { describe, it, expect, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "@/test/render";
import { Cookies } from "./Cookies";

describe("Cookies", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders the page heading", () => {
    renderWithRouter(<Cookies />);
    expect(screen.getByText("Cookie Settings")).toBeInTheDocument();
  });

  it("renders the consent toggle label", () => {
    renderWithRouter(<Cookies />);
    expect(screen.getByText("Consent to third-party cookies")).toBeInTheDocument();
  });

  it("toggle is checked when consent is true", () => {
    localStorage.setItem("consent", "true");
    renderWithRouter(<Cookies />);

    const toggle = screen.getByRole("checkbox");
    expect(toggle).toBeChecked();
  });

  it("toggle is unchecked when consent is false", () => {
    localStorage.setItem("consent", "false");
    renderWithRouter(<Cookies />);

    const toggle = screen.getByRole("checkbox");
    expect(toggle).not.toBeChecked();
  });

  it("toggle is unchecked when no consent exists", () => {
    renderWithRouter(<Cookies />);

    const toggle = screen.getByRole("checkbox");
    expect(toggle).not.toBeChecked();
  });

  it("sets consent to true when toggled on", async () => {
    const user = userEvent.setup();
    localStorage.setItem("consent", "false");
    renderWithRouter(<Cookies />);

    await user.click(screen.getByRole("checkbox"));

    expect(localStorage.getItem("consent")).toBe("true");
  });

  it("sets consent to false when toggled off", async () => {
    const user = userEvent.setup();
    localStorage.setItem("consent", "true");
    renderWithRouter(<Cookies />);

    await user.click(screen.getByRole("checkbox"));

    expect(localStorage.getItem("consent")).toBe("false");
  });
});
