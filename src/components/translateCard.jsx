import { useState } from "react";
import LanguageButton from "./languageButton";
import ActionButton from "./actionButton";
import ExpandButton from "./expandButton";

import SoundIcon from "/sound_max_fill.svg";
import CopyIcon from "/Copy.svg";
import TranslateIcon from "/Sort_alfa.svg";

function TranslateCard({
  languages,
  language,
  setLanguage,
  text,
  setText,
  handleTranslate,
  handleSpeak,
  handleCopy,
}) {
  const [characters, setCharacters] = useState(text.length);

  const handleTextChange = (e) => {
    setText(e.target.value);
    setCharacters(e.target.value.length);
  };

  return (
    <div className="bg-darkGray xl:w-[38rem] opacity-95 rounded-3xl border border-lightGray p-5 font-bold w-full text-sm">
      <div className="flex flex-row gap-2 overflow-x-auto items-center">
        {languages.slice(0, 4).map((lan) => (
          <LanguageButton
            key={lan.code}
            language={lan}
            selectedLanguage={language}
            setLanguage={setLanguage}
          />
        ))}
        <ExpandButton />
      </div>
      <div className="h-px my-3 bg-lightGray w-full"></div>
      <textarea
        type="text"
        placeholder="Enter text to translate"
        value={text}
        onChange={(e) => handleTextChange(e)}
        maxLength={500}
        className="resize-none bg-transparent text-white border-none focus:outline-none h-32 w-full p-2 align-top"
      />
      <div className="flex justify-end">
        <p className="text-lightGray text-xs">{characters}/500</p>
      </div>
      <div className="flex flex-row justify-between mt-3">
        <div className="flex flex-row gap-2 items-end">
          <ActionButton icon={SoundIcon} action={() => handleSpeak(text)} />
          <ActionButton icon={CopyIcon} action={() => handleCopy(text)} />
        </div>
        <button
          className="py-3 px-5 bg-blue text-white rounded-xl hover:bg-lightBlue transition-colors duration-300 ease-in-out flex flex-row gap-2 items-center font-bold focus:outline-none"
          onClick={handleTranslate}
        >
          <img src={TranslateIcon} alt="Translate" className="h-5 w-5" />
          Translate
        </button>
      </div>
    </div>
  );
}

export default TranslateCard;
