import { useParams, useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useShowData } from "@/lib/cms";
import type { WideImage } from "@/lib/cms";
import { Loader } from "@/components/Loader";
import { Carousel } from "@/components/Carousel";
import ReactPlayer from "react-player";

function reorderImages(images: WideImage[], startImage: { title: string } | undefined): WideImage[] {
  if (!startImage || images.length === 0) return images;
  const idx = images.findIndex((img) => img.title === startImage.title);
  if (idx <= 0) return images;
  return [...images.slice(idx), ...images.slice(0, idx)];
}

export function ShowPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const img = (location.state as { img?: { title: string } } | null)?.img;
  const { data, loading, error } = useShowData(slug!);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const orderedImages = useMemo(
    () => (data ? reorderImages(data.wideImages, img) : []),
    [data, img],
  );

  if (loading) return <Loader />;
  if (error) return <p className="text-brand-red text-center mt-8">{error.message}</p>;
  if (!data) return null;

  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto">
        <Carousel images={orderedImages} />

        <div className="flex justify-center mt-8">
          {data.bannerImage ? (
            <img src={data.bannerImage.url} alt={data.title} className="w-[65%]" />
          ) : (
            <h1 className="font-heading uppercase text-4xl tracking-wider">{data.title}</h1>
          )}
        </div>

        <div
          className="page-content mt-6 max-w-2xl mx-auto"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />

        {data.trailerUrl && localStorage.getItem("consent") === "true" && (
          <div className="mt-8 max-w-2xl mx-auto mb-16">
            <ReactPlayer url={data.trailerUrl} controls width="100%" />
          </div>
        )}
      </div>
    </section>
  );
}
