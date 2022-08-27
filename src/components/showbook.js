/* eslit-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaCircleNotch } from 'react-icons/fa';
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
    <ul className="list-container">
      {books.map((book) => (
        <li key={book.item_id} className="book-list">
          <BookCollection
            item_id={book.item_id}
            category={book.category}
            title={book.title}
            author={book.author}
          />
          <div className="cont-progress">
            <div className="status-container">
              <dt className="prog-report">
                <p><FaCircleNotch size={100} style={{ color: '#307bbe' }} /></p>
                <div className="status">
                  <dl className="percent">85%</dl>
                  <dl className="complete">Completed</dl>
                </div>
              </dt>

              <dt className="chapter-container">
                <dl className="chapter">CURRENT CHAPTER</dl>
                <dl className="topic">Chapter 8</dl>
                <button className="prog-btn" type="button">UPDATE PROGRESS</button>
              </dt>
            </div>
          </div>
        </li>
      ))}

      <AddBook />
    </ul>
  );
};

/** return (
    <ul className="book-container">
      {Object.keys(displayBooks).map((bookId) => (
        <li className="lesson-panel" key={displayBooks[bookId][0].item_id}>
          <div className="book-details">
            <dt className="category-item">{displayBooks[bookId][0].category}</dt>
            <dt className="title-item">{displayBooks[bookId][0].title}</dt>
            <dt className="author-item">{displayBooks[bookId][0].author}</dt>
            <div className="btn-container">
              <button className="comment-btn" type="button">Comments</button>

              <button
                className="remove-btn"
                id={bookId}
                type="button"
                onClick={(e) => deleteBookItems(e)}
              >
                Remove
              </button>

              <button className="edit-btn" type="button">Edit</button>
            </div>
          </div>

          <div className="status-container">
            <dt className="prog-report">
              <img src={progressImage} className="prog-image" alt="progress-icon" />
              <div className="status">
                <dl className="percent">85%</dl>
                <dl className="complete">Completed</dl>
              </div>
            </dt>

            <dt className="chapter-container">
              <dl className="chapter">CURRENT CHAPTER</dl>
              <dl className="topic">Chapter 8</dl>
              <button className="prog-btn" type="button">UPDATE PROGRESS</button>
            </dt>
          </div>
        </li>

      ))}
    </ul>
  );
   */

export default DisplayBooks;
