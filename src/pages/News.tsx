import { useEffect } from "react";
import { useNewsPosts } from "@/lib/cms";
import { Loader } from "@/components/Loader";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function News() {
  const { data: posts, loading } = useNewsPosts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <Loader />;

  return (
    <section className="py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-heading uppercase text-[1.75rem] tracking-[0.2rem] mb-8">News</h1>
        {posts?.map((post) => (
          <article key={post.id} className="mb-8 border-b border-white/20 pb-8">
            <p className="text-sm text-white/70 mb-2">
              {formatDate(post.date)}
              {post.publication && (
                <span>
                  {" "}&mdash; (Read more from the{" "}
                  {post.byline && <span>{post.byline} </span>}
                  <a href={post.newsLink ?? "#"} target="_blank" rel="noopener noreferrer" className="underline">
                    {post.publication.toUpperCase()}
                  </a>{" "}
                  article here)
                </span>
              )}
            </p>
            <h2 className="font-heading uppercase text-xl tracking-wider mb-4">{post.title}</h2>
            <div className="page-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        ))}
      </div>
    </section>
  );
}
