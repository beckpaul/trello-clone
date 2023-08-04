import { combineReducers } from 'redux';
import cardsReducer from './cards';
import titleReducer from './ title';
import listsReducer from './lists';

const rootReducer = combineReducers({
  title: titleReducer,
  cardIds: cardsReducer,
  lists: listsReducer
});

export default rootReducer;