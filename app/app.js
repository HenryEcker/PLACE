import React from 'react';
import ReactDOM from 'react-dom';
import HomePanel from './components/HomePanel';
import {getUser} from './server';


ReactDOM.render(
  <HomePanel />,
  document.getElementById('MainPanel')
);
