import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Show from "../common/Show";
import { MoonagePicturesContext } from "../../MoonagePictures";
import getImageOrder from "./utils/getImageOrder";

const AGGGTM = () => {
  const { state } = useLocation();
  const img = state?.img;
  const {
    agggtmData: { show, loading, wideImages: initialWideImages },
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

export default AGGGTM;
