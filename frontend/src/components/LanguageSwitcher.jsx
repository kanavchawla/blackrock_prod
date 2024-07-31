import React, { useEffect } from "react";

const LanguageSwitcher = () => {
  useEffect(() => {
    // Check if Google Translate script is already added
    if (window.googleTranslateElementInit) return;

    // Function to initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

    // Create and append the script only if it doesn't exist
    if (!document.querySelector("#google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div id="google_translate_element" className="text-right m-2 z-100"></div>
  );
};

export default LanguageSwitcher;
