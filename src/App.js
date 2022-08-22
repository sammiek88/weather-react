import React from 'react';
import GitHubLink from './GitHubLink.js';
import Search from './Search';
import CurrentDate from './CurrentDate';

import './App.css';

export default function App() {
  return (
    <div className="container">
      <CurrentDate />
      <Search />
      <GitHubLink />
    </div>
  );
}
