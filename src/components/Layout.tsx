import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <>
      <Navbar />
      <div className="mt-[18vh] mb-8 max-w-6xl mx-auto px-4 animate-fade-in">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
