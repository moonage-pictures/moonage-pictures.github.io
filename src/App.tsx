import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { Company } from "@/pages/Company";
import { News } from "@/pages/News";
import { Shows } from "@/pages/Shows";
import { ShowPage } from "@/pages/ShowPage";
import { People } from "@/pages/People";
import { Daydream } from "@/pages/Daydream";
import { Contact } from "@/pages/Contact";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/company" element={<Company />} />
          <Route path="/news" element={<News />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/shows/:slug" element={<ShowPage />} />
          <Route path="/people" element={<People />} />
          <Route path="/daydream" element={<Daydream />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
