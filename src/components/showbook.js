import React from 'react';
import { useSelector } from 'react-redux';
import BookCollection from './bookshelf';
import AddBook from './addbook';

const DisplayBooks = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => (
        <BookCollection
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default DisplayBooks;
