import {spanish, english} from '../local_data/text_lang';

export const SET_SPANISH_LANG = 'SET_SPANISH_LANG';
export const SET_ENGLISH_LANG = 'SET_ENGLISH_LANG';

export const setSpanishLang = () => {
  return {
    type: SET_SPANISH_LANG,
    payload: spanish
  };
};

export const setEnglishLang = () => {
  return {
    type: SET_ENGLISH_LANG,
    payload: english
  };
};
