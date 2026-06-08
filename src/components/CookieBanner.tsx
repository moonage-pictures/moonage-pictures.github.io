import { useState } from "react";
import { Link } from "react-router-dom";

export function CookieBanner() {
  const [visible, setVisible] = useState(
    () => localStorage.getItem("consent") === null,
  );

  if (!visible) return null;

  function handleAccept() {
    localStorage.setItem("consent", "true");
    setVisible(false);
  }

  function handleReject() {
    localStorage.setItem("consent", "false");
    setVisible(false);
  }

  return (
    <>
      <div
        data-testid="cookie-backdrop"
        className="fixed inset-0 z-[60] bg-black/60"
      />
      <div className="fixed bottom-0 left-0 right-0 z-[70] bg-black/95 border-t border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white text-sm">
            By using this site, you agree to our{" "}
            <Link to="/privacy-policy" className="underline hover:text-gray-300">
              terms and conditions
            </Link>
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-white text-black text-sm font-semibold rounded hover:bg-gray-200 transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={handleReject}
              className="px-4 py-2 border border-white text-white text-sm font-semibold rounded hover:bg-white/10 transition-colors"
            >
              Reject All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
