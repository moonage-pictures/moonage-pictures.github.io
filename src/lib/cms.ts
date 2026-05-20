import { useState, useEffect } from "react";

const CMS_BASE = "https://cms.moonagepictures.com/wp-json/wp/v2";

export interface WideImage {
  url: string;
  alt: string;
  title: string;
}

export interface ShowData {
  title: string;
  content: string;
  bannerImage: { url: string } | null;
  trailerUrl: string | null;
  wideImages: WideImage[];
  squareImages: Array<{ url: string; alt: string; description: string }>;
}

export interface PageData {
  title: string;
  body: string;
  acf: Record<string, unknown>;
}

export interface NewsPost {
  id: number;
  title: string;
  content: string;
  date: string;
  publication: string | null;
  byline: string | null;
  newsLink: string | null;
}

export interface ShowGalleryItem {
  id: number;
  squareImages: Array<{
    url: string;
    alt: string;
    description: string;
    title: string;
  }>;
}

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const cache = new Map<string, CacheEntry<unknown>>();
const CACHE_TTL = 5 * 60 * 1000;

async function fetchCached<T>(url: string): Promise<T> {
  const cached = cache.get(url);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data as T;
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error(`CMS request failed: ${res.status}`);
  const data = (await res.json()) as T;
  cache.set(url, { data, timestamp: Date.now() });
  return data;
}

interface WPPost {
  title: { rendered: string };
  content: { rendered: string };
  acf: {
    wideImages?: WideImage[];
    squareImages?: Array<{
      url: string;
      alt: string;
      description: string;
      title: string;
    }>;
    bannerImage?: { url: string };
    trailerUrl?: string;
    [key: string]: unknown;
  };
}

interface WPPage {
  title: { rendered: string };
  content: { rendered: string };
  acf: Record<string, unknown>;
}

function parseShow(post: WPPost): ShowData {
  return {
    title: post.title.rendered,
    content: post.content.rendered,
    bannerImage: post.acf.bannerImage?.url ? post.acf.bannerImage : null,
    trailerUrl: post.acf.trailerUrl || null,
    wideImages: post.acf.wideImages ?? [],
    squareImages: post.acf.squareImages ?? [],
  };
}

function parsePage(page: WPPage): PageData {
  return {
    title: page.title.rendered,
    body: page.content.rendered,
    acf: page.acf,
  };
}

interface HookResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useShowData(slug: string): HookResult<ShowData> {
  const [data, setData] = useState<ShowData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchCached<WPPost[]>(`${CMS_BASE}/posts?slug=${slug}`)
      .then((posts) => {
        if (cancelled) return;
        if (posts.length === 0) throw new Error(`Show not found: ${slug}`);
        setData(parseShow(posts[0]));
        setLoading(false);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(err instanceof Error ? err : new Error(String(err)));
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { data, loading, error };
}

const PAGE_SLUGS: Record<string, string> = {
  company: "2",
  people: "497",
  daydream: "160",
  contact: "19",
  "privacy-policy": "21",
};

export function usePageData(slug: string): HookResult<PageData> {
  const [data, setData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    const pageId = PAGE_SLUGS[slug];
    const url = pageId
      ? `${CMS_BASE}/pages/${pageId}`
      : `${CMS_BASE}/pages?slug=${slug}`;

    fetchCached<WPPage | WPPage[]>(url)
      .then((result) => {
        if (cancelled) return;
        const page = Array.isArray(result) ? result[0] : result;
        if (!page) throw new Error(`Page not found: ${slug}`);
        setData(parsePage(page));
        setLoading(false);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(err instanceof Error ? err : new Error(String(err)));
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { data, loading, error };
}

export function useShowsGallery(): HookResult<ShowGalleryItem[]> {
  const [data, setData] = useState<ShowGalleryItem[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    const galleryUrl =
      import.meta.env.VITE_SHOWS_GALLERY_URL ||
      `${CMS_BASE}/posts?categories=3&per_page=100`;

    fetchCached<WPPost[]>(galleryUrl)
      .then((posts) => {
        if (cancelled) return;
        setData(
          posts.map((p) => ({
            id: 0,
            squareImages: p.acf.squareImages ?? [],
          })),
        );
        setLoading(false);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(err instanceof Error ? err : new Error(String(err)));
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading, error };
}

export function useNewsPosts(): HookResult<NewsPost[]> {
  const [data, setData] = useState<NewsPost[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    fetchCached<WPPost[]>(
      `${CMS_BASE}/posts?categories=5&per_page=100`,
    )
      .then((posts) => {
        if (cancelled) return;
        setData(
          posts.map((p) => ({
            id: 0,
            title: p.title.rendered,
            content: p.content.rendered,
            date: (p as unknown as { date: string }).date,
            publication: (p.acf.publication as string) || null,
            byline: (p.acf.byline as string) || null,
            newsLink: (p.acf.newsLink as string) || null,
          })),
        );
        setLoading(false);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(err instanceof Error ? err : new Error(String(err)));
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading, error };
}
