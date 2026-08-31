import Post from '../post/Post';
import './App.css';
import { data } from './testData';

const App = () => (
  <div className='App'>
    <aside className='deprecation-banner' role='note'>
      <strong>editorjs-react-renderer is deprecated.</strong> Its successor is{' '}
      <a href='https://clepit.com'>Clepit</a>: a block-style editor with a server-first React
      renderer. Start with{' '}
      <a href='https://clepit.com/docs/react'>@clepit/react</a> or browse the{' '}
      <a href='https://clepit.com/docs/blocks'>block reference</a>.
    </aside>
    <header>Editor.js React Renderer</header>
    <Post data={ data } />
  </div>
);

export default App;
