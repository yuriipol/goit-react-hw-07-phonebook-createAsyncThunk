import { combineReducers } from 'redux';
import contactsReducer from './items/phone-book-items-reducer';
import filterReducer from './filter/phoneBookFilter-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
