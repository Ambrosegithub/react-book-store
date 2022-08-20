import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import BookCategory from './components/bookcategory';
import DisplayBooks from './components/showbook';

const App = () => (
  <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<DisplayBooks />} />
        <Route path="/categories" element={<BookCategory />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
