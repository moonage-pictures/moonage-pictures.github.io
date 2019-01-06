import React, { Component, Fragment } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

export default class Contact extends Component {
  componentDidMount = () => window.scrollTo(0, 0);

  render() {
    return (
      <Fragment>
        <Navbar />

        <div className="container">
          <section className="section">
            <div className="columns is-centered">
              <div className="column is-two-thirds-desktop ">
                <h1
                  className="title is-1"
                  style={{ marginTop: "2rem", borderBottom: "1px solid white" }}
                >
                  Contact
                </h1>
                <div className="columns">
                  <div className="column is-one-third-desktop">
                    <h2 className="title is-2">Address</h2>
                    <p className="body-font">
                      181 Wardour St
                      <br /> Soho
                      <br /> London W1F 8WZ
                    </p>
                  </div>
                  <div className="column is-one-third-desktop">
                    <h2 className="title is-2">Telephone</h2>
                    <p className="body-font">
                      <a
                        href="tel:+4420 8127 5574"
                        style={{
                          color: "white",
                          borderBottom: "1px solid white"
                        }}
                      >
                        020 8127 5574
                      </a>
                    </p>
                  </div>
                  <div className="column is-one-third-desktop">
                    <h2 className="title is-2">Email</h2>
                    <p className="body-font">
                      <a
                        href="mailto:office@moonagepictures.com"
                        style={{
                          color: "white",
                          borderBottom: "1px solid white"
                        }}
                      >
                        office@moonagepictures.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </Fragment>
    );
  }
}