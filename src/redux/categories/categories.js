// define constant
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export const checkBookStatus = () => ({
  return: {
    type: CHECK_STATUS,
  },
});

const categories = [];
export default (state = categories, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};
