import {SET_SPANISH_LANG, SET_ENGLISH_LANG} from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_SPANISH_LANG:
      return action.payload;
    case SET_ENGLISH_LANG:
      return action.payload;
    default:
      return state;
  };
};
