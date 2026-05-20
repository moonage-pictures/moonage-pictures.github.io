import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Show from "../common/Show";
import { MoonagePicturesContext } from "../../MoonagePictures";
import getImageOrder from "./utils/getImageOrder";

const Curfew = () => {
  const { state } = useLocation();
  const img = state?.img;
  const {
    curfewData: { show, wideImages: initialWideImages, loading },
  } = useContext(MoonagePicturesContext);

  const [wideImages, setWideImages] = useState([]);

  useEffect(() => {
    if (initialWideImages) setWideImages(initialWideImages);
  }, [initialWideImages]);

  useEffect(() => {
    window.scroll(0, 0);
    if (img) {
      setWideImages(getImageOrder(initialWideImages, img));
    }
  }, [img, initialWideImages]);

  return <Show show={show} wideImages={wideImages} loading={loading} />;
};

export default Curfew;
