function LanguageButton({ language, selectedLanguage, setLanguage }) {
  const isSelected = language.code === selectedLanguage;
  const buttonClass = isSelected
    ? "bg-lightGray text-white"
    : "text-lightGray hover:bg-lightGray hover:text-white";

  return (
    <button
      onClick={() => setLanguage(language.code)}
      className={`py-2 px-3 ${buttonClass} whitespace-nowrap transition-colors duration-300 ease-in-out rounded-xl focus:bg-lightGray focus:text-white`}
    >
      {language.name}
    </button>
  );
}

export default LanguageButton;
