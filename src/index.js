import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Home from './Home';

// ReactDOM.render(
//   <React.StrictMode>
//     <Nav />
//   </React.StrictMode>,
//   document.getElementById('nav')
// );

ReactDOM.render(<React.StrictMode>
  <Home />
</React.StrictMode>, document.getElementById('home'));
