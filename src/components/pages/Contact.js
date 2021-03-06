import React, { useContext, useEffect, Fragment } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Loader } from "../common/Loader";
import GoogleMap from "../common/GoogleMap";
import { MoonagePicturesContext } from "../../MoonagePictures";

const Contact = () => {
  const {
    contactData: { loading, title, body, contactInfo }
  } = useContext(MoonagePicturesContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="container fade">
        <section className="section">
          {loading ? (
            <Loader />
          ) : (
            <div className="columns is-centered is-multiline">
              <div className="column is-two-thirds-desktop ">
                <h1 className="title is-1 section-header">{title}</h1>
                <div className="columns is-multiline">
                  <div className="column is-one-third-desktop">
                    <div
                      className="page-content"
                      style={{
                        display: "flex",
                        flexFlow: "column nowrap",
                        height: "100%"
                      }}
                    >
                      <p
                        style={{ marginTop: 0 }}
                        dangerouslySetInnerHTML={{
                          __html: contactInfo.address
                        }}
                      />
                      <p>
                        <a
                          href={`tel:${contactInfo.telephone}`}
                          style={{
                            color: "white"
                          }}
                        >
                          {contactInfo.telephone}
                        </a>
                      </p>
                      <p>
                        <a
                          href={`mailto:${contactInfo.email}`}
                          style={{
                            color: "white"
                          }}
                        >
                          {contactInfo.email}
                        </a>
                      </p>
                      <div
                        style={{ marginTop: "auto" }}
                        dangerouslySetInnerHTML={{ __html: body }}
                      />
                    </div>
                  </div>

                  <div className="column is-two-thirds-desktop">
                    <GoogleMap
                      location={{ lat: 51.5144301, lng: -0.1296261 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contact