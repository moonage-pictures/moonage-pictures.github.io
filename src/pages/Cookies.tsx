import { useState } from "react";

export function Cookies() {
  const [consent, setConsent] = useState(
    () => localStorage.getItem("consent") === "true",
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.checked;
    localStorage.setItem("consent", String(value));
    setConsent(value);
  }

  return (
    <section className="py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-heading uppercase text-[1.75rem] tracking-[0.2rem] mb-8">
          Cookie Settings
        </h1>
        <label className="flex items-center gap-4 cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={consent}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-600 rounded-full peer-checked:bg-white transition-colors" />
            <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-black rounded-full transition-transform peer-checked:translate-x-5" />
          </div>
          <span className="text-white text-sm">Consent to third-party cookies</span>
        </label>
      </div>
    </section>
  );
}
