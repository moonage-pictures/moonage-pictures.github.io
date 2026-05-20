import { useEffect } from "react";
import { usePageData } from "@/lib/cms";
import { Loader } from "@/components/Loader";

export function PrivacyPolicy() {
  const { data, loading } = usePageData("privacy-policy");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <Loader />;
  if (!data) return null;

  return (
    <section className="py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-heading uppercase text-[1.75rem] tracking-[0.2rem] mb-8">{data.title}</h1>
        <div className="page-content" dangerouslySetInnerHTML={{ __html: data.body }} />
      </div>
    </section>
  );
}
