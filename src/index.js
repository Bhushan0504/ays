import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Midimg from './Midimg';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>,
  document.getElementById('nav')
);

ReactDOM.render(
  <React.StrictMode>
    <Midimg />
  </React.StrictMode>,
  document.getElementById('midimg')
);
