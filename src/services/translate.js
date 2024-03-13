import axios from "axios";
const url = "https://api.mymemory.translated.net";

export const translate = async (text, from, to) => {
  try {
    const response = await axios.get(
      `${url}/get?q=${text}&langpair=${from}|${to}`
    );
    return response.data.responseData.translatedText;
  } catch (error) {
    console.error(error);
  }
};

export const detect = async (text) => {
  try {
    const response = await axios.get(`${url}/get?q=${text}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
