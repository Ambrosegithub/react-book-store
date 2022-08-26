import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/categories';
import { bookReducer } from './books/book';

const store = configureStore(
  {
    reducer:
    {
      books: bookReducer,
      categories: categoriesReducer,
    },
  },
  applyMiddleware(thunk),
);

export default store;
