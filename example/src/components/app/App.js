import React from 'react';
import Post from '../post/Post';
import './App.css';
const data = require('./testData');

const App = () => (
  <div className='App'>
    <header>Editor.js React Renderer</header>
    <Post data={ data } />
  </div>
);

export default App;
