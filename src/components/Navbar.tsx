import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/images/logo.svg";

interface NavItem {
  to: string;
  label: string;
  color: string;
  activeColor: string;
  matchPrefix?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { to: "/company", label: "Company", color: "hover:bg-brand-red", activeColor: "bg-brand-red" },
  { to: "/news", label: "News", color: "hover:bg-brand-blue", activeColor: "bg-brand-blue" },
  { to: "/shows", label: "Shows", color: "hover:bg-brand-pink", activeColor: "bg-brand-pink", matchPrefix: true },
  { to: "/people", label: "People", color: "hover:bg-white hover:text-black", activeColor: "bg-white text-black" },
  { to: "/daydream", label: "Daydream", color: "hover:bg-brand-yellow", activeColor: "bg-brand-yellow" },
  { to: "/contact", label: "Contact", color: "hover:bg-brand-green", activeColor: "bg-brand-green" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  function isActive(item: NavItem) {
    if (item.matchPrefix) {
      return location.pathname === item.to || location.pathname.startsWith(item.to + "/");
    }
    return location.pathname === item.to;
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-white h-[18vh] flex items-end" role="navigation" aria-label="main navigation">
      <button
        className={`lg:hidden absolute top-4 left-4 flex flex-col gap-1.5 p-2 ${menuOpen ? "opacity-70" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="menu"
        aria-expanded={menuOpen}
      >
        <span className="block w-5 h-0.5 bg-white" />
        <span className="block w-5 h-0.5 bg-white" />
        <span className="block w-5 h-0.5 bg-white" />
      </button>

      <div className={`${menuOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row items-start lg:items-end w-full lg:justify-end absolute lg:static top-full left-0 bg-black lg:bg-transparent`}>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`px-4 py-2 font-heading font-bold uppercase text-white text-[1.5rem] tracking-[0.2rem] transition-colors lg:mt-[10vh] ${
              isActive(item) ? `${item.activeColor} text-black` : item.color
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Link to="/" className="px-4">
          <img src={logo} className="h-[14vh]" alt="Moonage Pictures Logo" />
        </Link>
      </div>
    </nav>
  );
}
