import React from 'react';

import './GitHubLink.css';

export default function gitHub() {
  return (
    <footer className="footer mt-4 p-1">
      This project was coded by{' '}
      <a
        href="https://modest-kirch-16da8d.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Samantha Kenyon. {''}
      </a>
      It is opensourced on {''}
      <a
        href="https://github.com/sammiek88/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        GitHub {''}
      </a>
      and hosted via {''}
      <a
        href="https://curious-tiramisu-df5fda.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        Netlify.
      </a>
    </footer>
  );
}
