import React from 'react';
import ReactDOM from 'react-dom';
import HomePanel from './components/HomePanel';
import {getUser, getseparatedInteractions} from './server';

var user = getUser();
var separatedInteractions = getseparatedInteractions();

ReactDOM.render(
    <HomePanel user={user} interactions={separatedInteractions}/>, document.getElementById('MainPanel'));
