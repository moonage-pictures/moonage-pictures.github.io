import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Carousel } from "./Carousel";

describe("Carousel", () => {
  const images = [
    { url: "https://example.com/1.jpg", alt: "Image 1", title: "One" },
    { url: "https://example.com/2.jpg", alt: "Image 2", title: "Two" },
  ];

  it("renders all images", () => {
    render(<Carousel images={images} />);

    expect(screen.getByAltText("Image 1")).toBeInTheDocument();
    expect(screen.getByAltText("Image 2")).toBeInTheDocument();
  });

  it("renders navigation buttons", () => {
    render(<Carousel images={images} />);

    expect(screen.getByLabelText("Previous slide")).toBeInTheDocument();
    expect(screen.getByLabelText("Next slide")).toBeInTheDocument();
  });

  it("renders nothing for empty images", () => {
    const { container } = render(<Carousel images={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
