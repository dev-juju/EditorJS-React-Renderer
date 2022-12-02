import Post from '../post/Post';
import './App.css';
import { data } from './testData';

const App = () => (
  <div className='App'>
    <header>Editor.js React Renderer</header>
    <Post data={ data } />
  </div>
);

export default App;
