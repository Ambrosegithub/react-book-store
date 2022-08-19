import React from 'react';
import { PropTypes } from 'prop-types';

const BookCollection = ({ title, author }) => (
  <ul>
    <div>{title}</div>
    <div>{author}</div>
    <button type="button">Remove books</button>
  </ul>
);

BookCollection.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookCollection;