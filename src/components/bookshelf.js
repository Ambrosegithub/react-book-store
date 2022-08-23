import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { RemovedBooks } from '../redux/books/book';

const BookCollection = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(RemovedBooks(Number(id)));
  };

  return (
    <ul>
      <div>{title}</div>
      <div>{author}</div>
      <button type="button" id={id} onClick={(e) => { handleDelete(e.target.id); }}>Remove books</button>
    </ul>
  );
};

BookCollection.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookCollection;
