// define constant
const ADD_BOOK = 'bookstore/bookS/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/bookS/REMOVE_BOOK';

export const addedbooks = (payload) => ({
  return: {
    type: ADD_BOOK,
    payload,
  },
});

export const RemovedBooks = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});
const Books = [];

export default (state = Books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== book.payload);
    default:
      return state;
  }
};
