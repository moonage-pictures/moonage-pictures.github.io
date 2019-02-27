import React, { Component, Fragment } from "react";
import axios from "axios";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import ReactPlayer from "react-player";
import { Loader } from "../common/Loader";

export default class Show extends Component {
  state = {
    // show: this.props.location.state.show || null,
    playerLoaded: false,
    loading: true
  };

  componentDidMount = async () => {
    window.scrollTo(0, 0);
    if (!this.state.show) await this.getShow();
    this.setState({loading: false})
  };

  getShow = async () => {
    const { data: show } = await axios({
      url: "https://cms.moonagepictures.com/wp-json/wp/v2/posts/488",
      method: "GET"
    });
    this.setState({ show });
  };

  successState = () => this.setState({ playerLoaded: true });

  render() {
    const { show, playerLoaded, loading } = this.state;
    return (
      <Fragment>
        <Navbar />
        <div className="container fade">
          <section className="section">
          {loading ? <Loader /> : 
          <Fragment>
            <div className="columns is-centered is-multiline">
              <div className="column is-two-thirds-desktop">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <figure
                    className="image"
                    style={{ marginTop: "2rem", width: "65%" }}
                  >
                    <img
                      src={show.acf.bannerImage.url}
                      alt={`${show.title.rendered} screenshot`}
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="columns is-centered is-multiline">
              <div className="column is-two-thirds-desktop ">
                <div
                  className="page-content"
                  dangerouslySetInnerHTML={{ __html: show.content.rendered }}
                />
              </div>
              <div className="column is-two-thirds-desktop is-full-mobile is-full-tablet">
                {window.innerWidth >= 1024 ? (
                  <div>
                    {!playerLoaded && (
                      <Loader section="trailer" style={{ margin: "0 auto" }} />
                    )}{" "}
                    <div className="fade">
                      <ReactPlayer
                        url={show.acf.trailerUrl}
                        onReady={this.successState}
                        controls
                        width="100%"
                      />
                    </div>
                  </div>
                ) : (
                  <Fragment>
                    {!playerLoaded && <Loader section="trailer" />}{" "}
                    <div className="fade">
                      <ReactPlayer
                        url={show.acf.trailerUrl}
                        width="100%"
                        onReady={this.successState}
                        controls
                      />
                    </div>
                  </Fragment>
                )}
              </div>
            </div>
            </Fragment>}
          </section>
        </div>
        <Footer />
      </Fragment>
    );
  }
}