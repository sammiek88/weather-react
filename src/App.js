import React from 'react';
import GitHubLink from './GitHubLink.js';
import Search from './Search';

import './App.css';

export default function App() {
  return (
    <div className="container">
      <Search />
      <GitHubLink />
    </div>
  );
}
