import { http, HttpResponse } from "msw";

const CMS_BASE = "https://cms.moonagepictures.com/wp-json/wp/v2";

export const mockShowPost = {
  title: { rendered: "Test Show" },
  content: { rendered: "<p>Show description content</p>" },
  date: "2024-01-15T10:00:00",
  acf: {
    wideImages: [
      { url: "https://example.com/wide1.jpg", alt: "Wide 1", title: "Image 1" },
      { url: "https://example.com/wide2.jpg", alt: "Wide 2", title: "Image 2" },
    ],
    squareImages: [
      { url: "https://example.com/sq1.jpg", alt: "Square 1", description: "test-show", title: "Sq1" },
    ],
    bannerImage: { url: "https://example.com/banner.jpg" },
    trailerUrl: "https://www.youtube.com/watch?v=test123",
  },
};

export const mockPageData = {
  title: { rendered: "Test Page" },
  content: { rendered: "<p>Page body content</p>" },
  acf: {
    companyImage: { url: "https://example.com/company.jpg" },
  },
};

export const mockContactPage = {
  title: { rendered: "Contact" },
  content: { rendered: "<p>Additional info</p>" },
  acf: {
    address: "<p>123 Test Street</p>",
    telephone: "+44 20 1234 5678",
    email: "info@test.com",
  },
};

export const mockNewsPosts = [
  {
    title: { rendered: "News Article One" },
    content: { rendered: "<p>Article content</p>" },
    date: "2024-03-01T12:00:00",
    acf: {
      publication: "The Guardian",
      byline: "Jane Smith",
      newsLink: "https://example.com/article",
    },
  },
  {
    title: { rendered: "News Article Two" },
    content: { rendered: "<p>Second article</p>" },
    date: "2024-02-15T09:00:00",
    acf: {
      publication: null,
      byline: null,
      newsLink: null,
    },
  },
];

export const mockGalleryPosts = [
  {
    title: { rendered: "Gallery Set" },
    content: { rendered: "" },
    acf: {
      squareImages: [
        { url: "https://example.com/g1.jpg", alt: "Gallery 1", description: "curfew", title: "G1" },
        { url: "https://example.com/g2.jpg", alt: "Gallery 2", description: "bodies", title: "G2" },
      ],
    },
  },
];

export const handlers = [
  http.get(`${CMS_BASE}/posts`, ({ request }) => {
    const url = new URL(request.url);
    const slug = url.searchParams.get("slug");
    const categories = url.searchParams.get("categories");

    if (slug) {
      return HttpResponse.json([mockShowPost]);
    }
    if (categories === "5") {
      return HttpResponse.json(mockNewsPosts);
    }
    if (categories === "3") {
      return HttpResponse.json(mockGalleryPosts);
    }
    return HttpResponse.json(mockGalleryPosts);
  }),

  http.get(`${CMS_BASE}/pages/:id`, ({ params }) => {
    const id = params.id as string;
    if (id === "19") return HttpResponse.json(mockContactPage);
    return HttpResponse.json(mockPageData);
  }),

  http.get(`${CMS_BASE}/pages`, () => {
    return HttpResponse.json([mockPageData]);
  }),
];
