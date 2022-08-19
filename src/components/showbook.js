import React, { useState } from 'react';
import BookCollection from './bookshelf';
import AddbookToStore from './addbook';

const DisplayBooks = () => {
  const [books, setBooks] = useState([]);

  const submitBooks = () => setBooks();

  return (
    <div>
      {books.map((books) => (
        <BookCollection
          key={books.id}
          title={books.title}
          author={books.author}
        />
      ))}
      <AddbookToStore submitBooks={submitBooks} />
    </div>
  );
};

export default DisplayBooks;
