import React from 'react';
import List from './List';
import Form from './Form';
import Post from './Posts';
import '../../../src/App.css';

const App = () => (
  <div className="app">
    <div className="article-list">
      <h2>Articles</h2>
        <List />
    </div>
    <div className="add-article">
        <h2>Add a new article</h2>
        <Form />
    </div>
    <div>
      <h2>API posts</h2>
      <Post />
    </div>
  </div>
);
export default App;