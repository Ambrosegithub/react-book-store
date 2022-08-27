/* eslint-disable */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newBookFetch } from '../redux/books/book';

const AddBook = () => {
  const dispatch = useDispatch();
  const [categoryName, setCategory] = useState('');
  const [titleName, setTitle] = useState('');
  const [authorName, setAuthor] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
      const data = {
        item_id: Number(Date.now()),
        category: categoryName,
        title: titleName,
        author: authorName,
      };
      dispatch(newBookFetch(data));
      setCategory('');
      setTitle('');
    setAuthor('');
  };
  return (
    <div className='form-container'>
      <h2 className='add-books'>ADD NEW BOOK</h2>
      <form className='formInput' onSubmit={handleSubmit}>
        <div className='input-select'>
        <input
          name="title"
          type="text"
          placeholder="Book title"
          value={titleName}
          onInput={(e) => setTitle(e.target.value)}
          className="inputTitle"

        />
        <input
          name="author"
          type="text"
          placeholder="Author"
          value={authorName}
          onInput={(e) => setAuthor(e.target.value)}
          className="inputAuthor"
        />
        <select
        className="category-input"
        name="category"
        type="text"
        onInput={(e) => setCategory(e.target.value)}
      >
        <option value="Choose">Choose Category</option>
        <option value="Fiction">Fiction</option>
        <option value="Drama">Drama</option>
        <option value="Action">Action</option>
        <option value="Romance">Morals</option>
        <option value="Kids">Kids</option>
      </select>
      </div>
        <button type="submit" className='add-btn'>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};
export default AddBook;
