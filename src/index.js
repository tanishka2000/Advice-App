//all the js files that have react components should import the below
import React from 'react';
//SO that we can hook on to that element in which our whole react application is to be contained
import ReactDOM from 'react-dom';
//Our main component
import App from './App';

//first param the component we want to render
//second param is the element we want to hook on to
//We need to target root div(public/index.html), and our whole react application will be contained inside this
ReactDOM.render(<App />, document.getElementById('root'));