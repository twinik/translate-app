import LanguageButton from "./languageButton";
import ActionButton from "./actionButton";
import ExpandButton from "./expandButton";

import SoundIcon from "/sound_max_fill.svg";
import CopyIcon from "/Copy.svg";
import SwitchIcon from "/Horizontal_top_left_main.svg";

function TranslateCard({
  languages,
  language,
  setLanguageToTranslate,
  translatedText,
  handleSpeak,
  handleCopy,
  handleSwitch,
}) {
  return (
    <div className="bg-veryDarkGray rounded-3xl border border-lightGray p-5 font-bold w-full text-sm">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 overflow-x-auto items-center">
          {languages
            .slice(1)
            .slice(0, 3)
            .map((lan) => (
              <LanguageButton
                key={lan.code}
                language={lan}
                selectedLanguage={language}
                setLanguage={setLanguageToTranslate}
              />
            ))}
          <ExpandButton />
        </div>
        <ActionButton
          icon={SwitchIcon}
          action={() => handleSwitch()}
          extraStyles={"ml-3 w-16 xl:w-8"}
        />
      </div>
      <div className="h-px my-3 bg-lightGray w-full"></div>
      <p className="overflow-y-auto bg-transparent text-white focus:outline-none h-[10.5rem] w-full p-2 align-top">
        {translatedText}
      </p>

      <div className="flex flex-row gap-2 items-end">
        <ActionButton
          icon={SoundIcon}
          action={() => handleSpeak(translatedText)}
        />
        <ActionButton
          icon={CopyIcon}
          action={() => handleCopy(translatedText)}
        />
      </div>
    </div>
  );
}

export default TranslateCard;
