import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
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
  { name: "German", code: "de" },
  { name: "Italian", code: "it" },
  { name: "Portuguese", code: "pt" },
  { name: "Russian", code: "ru" },
  { name: "Hebrew", code: "he" },
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
    toast.success("Text copied to clipboard");
  };

  const handleSwitch = () => {
    const aux = language;
    setLanguage(languageToTranslate);
    setLanguageToTranslate(aux);
  };

  return (
    <div className="flex flex-col pt-3 items-center px-5 xl:px-16 2xl:px-40 h-dvh xl:pt-24 2xl:pt-36">
      <Toaster />
      <img
        src="/logo.svg"
        alt="logo"
        className="h-12 mb-3 2xl:h-20 xl:mb-20 xl:h-16"
      />
      <div className="flex flex-col lg:flex-row w-full gap-3 justify-center 2xl:px-12">
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
          handleSwitch={handleSwitch}
        />
      </div>
    </div>
  );
}

export default App;
