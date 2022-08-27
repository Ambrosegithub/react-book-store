import React from 'react';
import { NavLink } from 'react-router-dom';
import profileImg from '../../page/icon.png';
import './navbar.css';

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
    <nav className="navbar">
      <h1>Bookstore CMS</h1>
      <div className="navmenu-div">
        <ul className="navmenu">
          {URLS.map((url) => (
            <li className="nav-item" key={url.id}>
              <NavLink to={url.url}>{url.text}</NavLink>
            </li>
          ))}
        </ul>
        <img src={profileImg} width={20} height={20} className="profile-icon" alt=" a nice looking profile-icons" />
      </div>
    </nav>
  );
};

export default NavBar;
