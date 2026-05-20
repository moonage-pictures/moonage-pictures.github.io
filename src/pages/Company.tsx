import { useEffect } from "react";
import { usePageData } from "@/lib/cms";
import { Loader } from "@/components/Loader";

export function Company() {
  const { data, loading } = usePageData("company");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <Loader />;
  if (!data) return null;

  const companyImage = data.acf.companyImage as { url: string } | undefined;

  return (
    <section className="py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-heading uppercase text-[1.75rem] tracking-[0.2rem] mb-8">{data.title}</h1>
        <div className="page-content" dangerouslySetInnerHTML={{ __html: data.body }} />
        {companyImage && (
          <div className="flex justify-center mt-8">
            <img src={companyImage.url} alt="Moonage Alligator" className="w-1/2" />
          </div>
        )}
      </div>
    </section>
  );
}
