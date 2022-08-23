// define constant
const ADD_BOOK = 'bookstore/bookS/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/bookS/REMOVE_BOOK';
const Books = [];
const bookReducer = (state = Books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.book,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addedbooks = (book) => ({

  type: ADD_BOOK,
  book,

});

export const RemovedBooks = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default bookReducer;
