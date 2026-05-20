import { describe, it, expect, vi } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ShowPage } from "./ShowPage";

vi.mock("react-player", () => ({
  default: ({ url }: { url: string }) => <div data-testid="react-player">{url}</div>,
}));

function renderShowPage(slug: string) {
  return render(
    <MemoryRouter initialEntries={[`/shows/${slug}`]}>
      <Routes>
        <Route path="/shows/:slug" element={<ShowPage />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("ShowPage", () => {
  it("shows loader while fetching", () => {
    renderShowPage("curfew");
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders show content after loading", async () => {
    renderShowPage("curfew");

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    expect(screen.getByText("Show description content")).toBeInTheDocument();
  });

  it("renders carousel images", async () => {
    renderShowPage("curfew");

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    expect(screen.getByAltText("Wide 1")).toBeInTheDocument();
    expect(screen.getByAltText("Wide 2")).toBeInTheDocument();
  });

  it("renders banner image when available", async () => {
    renderShowPage("curfew");

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    expect(screen.getByAltText("Test Show")).toBeInTheDocument();
  });

  it("renders video player for trailer", async () => {
    renderShowPage("curfew");

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    expect(screen.getByTestId("react-player")).toBeInTheDocument();
  });
});
