import React, { Component } from 'react';
import './App.css';
import PostsPage from './pages/PostsPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default App;
