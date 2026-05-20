import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bulma/css/bulma.min.css";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Shows from "./components/pages/Shows";
import Curfew from "./components/pages/Curfew";
import Company from "./components/pages/Company";
import People from "./components/pages/People";
import Daydream from "./components/pages/Daydream";
import Contact from "./components/pages/Contact";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Intergalactic from "./components/pages/Intergalactic";
import PursuitOfLove from "./components/pages/PursuitOfLove";
import Obsession from "./components/pages/Obsession";
import Bodies from "./components/pages/Bodies";
import FamousFive from "./components/pages/FamousFive";
import TheGentlemen from "./components/pages/TheGentlemen";
import AGGGTM from "./components/pages/AGGGTM";
import MysteryProspectHotel from "./components/pages/MysteryProspectHotel";
import TheLeopard from "./components/pages/TheLeopard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/news" element={<News />} />
        <Route path="/shows/curfew" element={<Curfew />} />
        <Route path="/shows/intergalactic" element={<Intergalactic />} />
        <Route path="/shows/the-pursuit-of-love" element={<PursuitOfLove />} />
        <Route path="/shows/obsession" element={<Obsession />} />
        <Route path="/shows/bodies" element={<Bodies />} />
        <Route path="/shows/famous-five" element={<FamousFive />} />
        <Route path="/shows/the-gentlemen" element={<TheGentlemen />} />
        <Route path="/shows/agggtm" element={<AGGGTM />} />
        <Route path="/shows/mystery-prospect-hotel" element={<MysteryProspectHotel />} />
        <Route path="/shows/the-leopard" element={<TheLeopard />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/people" element={<People />} />
        <Route path="/daydream" element={<Daydream />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
