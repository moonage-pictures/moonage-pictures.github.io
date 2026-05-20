import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Loader } from "./Loader";

describe("Loader", () => {
  it("renders loading text", () => {
    render(<Loader />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders with section name", () => {
    render(<Loader section="trailer" />);
    expect(screen.getByText("Loading trailer...")).toBeInTheDocument();
  });
});
