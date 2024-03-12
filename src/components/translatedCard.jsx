import LanguageButton from "./languageButton";
import ActionButton from "./actionButton";

import SoundIcon from "/sound_max_fill.svg";
import CopyIcon from "/Copy.svg";
import SwitchIcon from "/Horizontal_top_left_main.svg";

function TranslateCard({
  languages,
  language,
  setLanguageToTranslate,
  translatedText,
}) {
  return (
    <div className="bg-veryDarkGray rounded-3xl border border-lightGray p-5 font-bold w-full text-sm">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-3 overflow-x-auto">
          {languages.slice(1).map((lan) => (
            <LanguageButton
              key={lan.code}
              language={lan}
              selectedLanguage={language}
              setLanguage={setLanguageToTranslate}
            />
          ))}
        </div>
        <ActionButton icon={SwitchIcon} action={() => alert("Switch")} />
      </div>
      <div className="h-px my-3 bg-lightGray w-full"></div>
      <p className="overflow-y-auto bg-transparent text-white focus:outline-none h-[10.5rem] w-full p-2 align-top">
        {translatedText}
      </p>

      <div className="flex flex-row gap-2 items-end">
        <ActionButton icon={SoundIcon} action={() => alert("Sound")} />
        <ActionButton icon={CopyIcon} action={() => alert("Copy")} />
      </div>
    </div>
  );
}

export default TranslateCard;
