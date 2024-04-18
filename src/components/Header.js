// components/Header.js

import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>FitFreak</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/challenges">Challenges</a></li>
          <li><a href="/progress">Progress</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
