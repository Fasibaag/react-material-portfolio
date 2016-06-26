import { combineReducers } from 'redux';
import langReducer from './lang_reducer';

const rootReducer = combineReducers({
  lang: langReducer
});

export default rootReducer;
