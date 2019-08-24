import React from 'react';
import Post from '../post/Post';
import './App.css';
const data = require('./testData');

const App = () => (
  <div className="App">
    <div className="App-header">
      <h2>Editor.js React Renderer</h2>
    </div>
    <Post data={ data } />
  </div>
);

export default App;
