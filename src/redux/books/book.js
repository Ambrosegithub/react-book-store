// define constant
const ADD_BOOK = 'bookstore/bookS/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/bookS/REMOVE_BOOK';
const Books = [
  {
    id: 1,
    title: 'Think Big',
    author: 'Ben Carson',
  },
  {
    id: 2,
    title: 'Eloquent Javascript',
    author: 'Marijn Haverbeke',
  },
  {
    id: 3,
    title: 'Power of Mind',
    author: 'Pastor Chris Oyakhilomen PHD',
  },
  {
    id: 4,
    title: 'Thing Fall Apart',
    author: 'Chinwe Achebe',
  },
  {
    id: 5,
    title: 'Treasure island',
    author: 'Emily Bronte'
  },
  {
    id: 6,
    title: 'Reader are Leader',
    author: 'BEN Murray'
  },
];
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
