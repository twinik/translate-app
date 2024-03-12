import { useState } from "react";
import "./App.css";
import TranslateCard from "./components/translateCard";

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
    <>
      <div className="flex flex-col justify-center items-center py-20 px-5">
        <img src="/logo.svg" alt="logo" className="h-12 mb-10" />
        <div className="flex flex-col lg:flex-row w-full gap-3">
          <TranslateCard
            languages={languages}
            language={language}
            setLanguage={setLanguage}
            text={text}
            setText={setText}
          />
          <TranslateCard languages={languages} />
        </div>
      </div>
    </>
  );
}

export default App;
