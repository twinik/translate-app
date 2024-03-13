import { useState, useEffect } from "react";
import TranslateCard from "./components/translateCard";
import TranslatedCard from "./components/translatedCard";
import { translate } from "./services/translate";
import handleSpeak from "./utils/textToSpeech";
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

  useEffect(() => {
    if (text) {
      const delayDebounceFn = setTimeout(() => {
        const fetchTranslation = async () => {
          const translation = await translate(
            text,
            language,
            languageToTranslate
          );
          setTranslatedText(translation);
        };
        fetchTranslation();
      }, 400);

      return () => clearTimeout(delayDebounceFn);
    } else {
      setTranslatedText("");
    }
  }, [text, language, languageToTranslate]);

  const handleTranslate = async () => {
    const translation = await translate(text, language, languageToTranslate);
    setTranslatedText(translation);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

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
          handleTranslate={handleTranslate}
          handleSpeak={handleSpeak}
          handleCopy={handleCopy}
        />
        <TranslatedCard
          languages={languages}
          language={languageToTranslate}
          setLanguageToTranslate={setLanguageToTranslate}
          translatedText={translatedText}
          handleSpeak={handleSpeak}
          handleCopy={handleCopy}
        />
      </div>
    </div>
  );
}

export default App;
