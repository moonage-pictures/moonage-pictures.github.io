import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useShowsGallery } from "@/lib/cms";
import { Loader } from "@/components/Loader";

export function Shows() {
  const { data: shows, loading } = useShowsGallery();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <Loader />;

  return (
    <section className="py-8">
      {shows?.map((show, showIdx) => (
        <div key={showIdx} className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {show.squareImages.map((img, i) => (
            <Link
              key={i}
              to={`/shows/${img.description}`}
              state={{ img }}
            >
              <div className="aspect-square overflow-hidden cursor-pointer hover:opacity-70 transition-opacity">
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            </Link>
          ))}
        </div>
      ))}
    </section>
  );
}
