import { useEffect } from "react";
import { usePageData } from "@/lib/cms";
import { Loader } from "@/components/Loader";

export function Contact() {
  const { data, loading } = usePageData("contact");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <Loader />;
  if (!data) return null;

  const contactInfo = data.acf as {
    address?: string;
    telephone?: string;
    email?: string;
  };

  return (
    <section className="py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-heading uppercase text-[1.75rem] tracking-[0.2rem] mb-8">
          {data.title}
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="page-content">
            {contactInfo.address && (
              <div dangerouslySetInnerHTML={{ __html: contactInfo.address }} />
            )}
            {contactInfo.telephone && (
              <p>
                <a
                  href={`tel:${contactInfo.telephone}`}
                  className="text-white hover:underline"
                >
                  {contactInfo.telephone}
                </a>
              </p>
            )}
            {contactInfo.email && (
              <p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white hover:underline"
                >
                  {contactInfo.email}
                </a>
              </p>
            )}

            {data.body && (
              <div dangerouslySetInnerHTML={{ __html: data.body }} />
            )}
            <p className="text-xs mt-4">
              Company Number: 10956051
              <br />
              Registered Office: ITV, White City, 201 Wood Lane, London W12 7RU
            </p>
          </div>
          {localStorage.getItem("consent") === "true" && (
            <div className="md:col-span-2">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4966.0!2d-0.125306!3d51.518028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMxJzA0LjkiTiAwwrAwNyczMS4xIlc!5e0!3m2!1sen!2suk!4v1"
                className="w-full h-[400px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
