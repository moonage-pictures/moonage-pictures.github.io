import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useShowData, usePageData, useNewsPosts, useShowsGallery } from "./cms";

describe("useShowData", () => {
  it("fetches show data by slug", async () => {
    const { result } = renderHook(() => useShowData("curfew"));

    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).not.toBeNull();
    expect(result.current.data!.title).toBe("Test Show");
    expect(result.current.data!.wideImages).toHaveLength(2);
    expect(result.current.data!.trailerUrl).toBe("https://www.youtube.com/watch?v=test123");
    expect(result.current.error).toBeNull();
  });

  it("returns cached data on second call", async () => {
    const { result: first } = renderHook(() => useShowData("curfew"));
    await waitFor(() => expect(first.current.loading).toBe(false));

    const { result: second } = renderHook(() => useShowData("curfew"));
    await waitFor(() => expect(second.current.loading).toBe(false));

    expect(second.current.data!.title).toBe("Test Show");
  });
});

describe("usePageData", () => {
  it("fetches page data by slug", async () => {
    const { result } = renderHook(() => usePageData("company"));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).not.toBeNull();
    expect(result.current.data!.title).toBe("Test Page");
    expect(result.current.data!.body).toContain("Page body content");
  });
});

describe("useNewsPosts", () => {
  it("fetches news posts", async () => {
    const { result } = renderHook(() => useNewsPosts());

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toHaveLength(2);
    expect(result.current.data![0].title).toBe("News Article One");
    expect(result.current.data![0].publication).toBe("The Guardian");
  });
});

describe("useShowsGallery", () => {
  it("fetches gallery data", async () => {
    const { result } = renderHook(() => useShowsGallery());

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toHaveLength(1);
    expect(result.current.data![0].squareImages).toHaveLength(2);
  });
});
