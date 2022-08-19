import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const URLS = [
    {
      id: 1,
      url: '/',
      text: 'Books',
    },
    {
      id: 2,
      url: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <nav>
      <h1>Bookstore CMS</h1>
      <ul className="navmenu">
        {URLS.map((url) => (
          <li className="nav-item" key={url.id}>
            <NavLink to={url.url}>{url.text}</NavLink>
          </li>
        ))}

      </ul>
      <i className="fa-light fa-user" />
    </nav>
  );
};

export default NavBar;
