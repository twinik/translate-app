import { useState } from "react";
import TranslateCard from "./components/translateCard";
import TranslatedCard from "./components/translatedCard";
import "./App.css";

const languages = [
  { name: "Detect Language", code: "" },
  { name: "English", code: "en" },
  { name: "French", code: "fr" },
  { name: "Spanish", code: "es" },
];

function App() {
  const [language, setLanguage] = useState(languages[1].code);
  const [languageToTranslate, setLanguageToTranslate] = useState(
    languages[2].code
  );
  const [text, setText] = useState("Hello, how are you?");
  const [translatedText, setTranslatedText] = useState("");

  return (
    <div className="flex flex-col justify-center items-center py-16 px-5 xl:px-16">
      <img
        src="/logo.svg"
        alt="logo"
        className="h-12 mb-8 2xl:h-20 xl:mb-16 2xl:mb-20 xl:h-16"
      />
      <div className="flex flex-col lg:flex-row w-full gap-3">
        <TranslateCard
          languages={languages}
          language={language}
          setLanguage={setLanguage}
          text={text}
          setText={setText}
        />
        <TranslatedCard
          languages={languages}
          language={languageToTranslate}
          setLanguageToTranslate={setLanguageToTranslate}
          translatedText={translatedText}
        />
      </div>
    </div>
  );
}

export default App;
