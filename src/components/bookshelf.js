/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteBookFetch } from '../redux/books/book';

const BookCollection = ({ item_id, category, title, author }) => {
  const dispatch = useDispatch();
  
  const handleDelete = (e) => {
    const targetId = Number(e.target.id);
      dispatch(deleteBookFetch(targetId))
  };
  return (
    <div key={item_id} className="container-btn">
      <div className='category'>{category}</div>
      <div className='title'>{title}</div>
      <div className='author'>{author}</div>
      <div className="btn-container">
        <button className="comment-btn" type="button">Comments</button>
        <button
            className="delete-btn"
            id={item_id}
            type="button"
            onClick={(e) => handleDelete(e)}
          >
            Remove
          </button>
          <button className="edit-btn" type="button">Edit</button>
      </div>
    </div>
  );
};

BookCollection.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookCollection;
