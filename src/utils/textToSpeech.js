const handleSpeak = (text) => {
  if ("speechSynthesis" in window) {
    const synthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synthesis.speak(utterance);
  } else {
    console.error("Text to speech is not supported by this browser");
  }
};

export default handleSpeak;
