/* eslit-disable */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookCollection from './bookshelf';
import AddBook from './addbook';
import { fetchBooks } from '../redux/books/book';

const DisplayBooks = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <ul>
      {books.map((book) => (
        <li key={book.item_id}>
          <BookCollection
            item_id={book.item_id}
            title={book.title}
            author={book.author}
          />
        </li>
      ))}

      <AddBook />
    </ul>
  );
};

export default DisplayBooks;
