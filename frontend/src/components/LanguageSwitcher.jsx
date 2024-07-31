import React, { useEffect } from "react";

const LanguageSwitcher = () => {
  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      };
    }

    if (!document.querySelector("#google-translate-script")) {
      const addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      addScript.id = "google-translate-script";
      document.body.appendChild(addScript);
    }
  }, []);

  return <div id="google_translate_element" className="text-right m-2"></div>;
};

export default LanguageSwitcher;
