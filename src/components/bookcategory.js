import React from 'react';
import { useDispatch } from 'react-redux';
import checkBookStatus from '../redux/categories/categories';

const BookCategory = () => {
  const handlecheckStatus = () => {
    const dispatch = useDispatch();
    dispatch(checkBookStatus);
  };
  return (
    <div>
      <button type="button" onClick={handlecheckStatus}>
        Check staus
      </button>
    </div>
  );
};

export default BookCategory;
