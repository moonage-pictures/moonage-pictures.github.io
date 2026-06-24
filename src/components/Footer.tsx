import { Link, useLocation } from "react-router-dom";

export function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer
      className={`bg-black w-full py-4 ${isHome ? "relative" : "fixed bottom-0 left-0 lg:fixed max-lg:relative"}`}
    >
      <div className="flex justify-center gap-6 mb-2">
        <a
          href="https://www.facebook.com/MoonagePics/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <svg className="w-5 h-5 fill-white" viewBox="0 0 320 512">
            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V142.2c0-27.1 7.4-45.5 46.3-45.5H302V6.3C294.8 5.2 265.4 3 231.2 3 160.3 3 112 46 112 130.6v70.9H26v97.8h86z" />
          </svg>
        </a>
        <a
          href="https://twitter.com/moonagepictures"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X/Twitter"
        >
          <svg className="w-5 h-5 fill-white" viewBox="0 0 512 512">
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172l95.9 130.2L389.2 48zm-24.8 373.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/moonagepictures/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg className="w-5 h-5 fill-white" viewBox="0 0 448 512">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </a>
      </div>
      <p className="text-center text-[0.65rem]">
        Copyright Moonage Pictures Limited &copy; {new Date().getFullYear()}.{" "}
        <Link to="/privacy-policy" className="text-white hover:underline">
          Privacy Notice
        </Link>
        {" · "}
        <a
          href="https://www.itvplc.com/~/media/Files/I/ITV-PLC-V2/documents/ITV%20Modern%20Slavery%20Act%20Transparency%20Statement%202026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          ITV's Modern Slavery Statement
        </a>
        {" · "}
        <Link to="/cookies" className="text-white hover:underline">
          Cookies Settings
        </Link>
      </p>
      {isHome && (
        <p className="text-center text-[0.65rem]">
          Designed by{" "}
          <a
            className="text-white hover:underline"
            href="http://richardtzanov.com"
          >
            richardtzanov.com
          </a>
        </p>
      )}
    </footer>
  );
}
