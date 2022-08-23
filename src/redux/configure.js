import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import bookReducer from './books/book';

const rootReducer = {
  books: bookReducer,
  categories: categoriesReducer,
};
const store = configureStore({ reducer: rootReducer });

export default store;
