import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { checkBookStatus } from './categories/categories';
import { addedbooks, RemovedBooks } from './books/book';

const rootReducer = combineReducers({
  AddandRemoveBooks: {
    addedbooks, RemovedBooks,
  },
  Check_Status: checkBookStatus,
});
const store = configureStore(rootReducer);

export default store;
