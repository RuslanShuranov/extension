import React, { Component } from 'react'
import './App.css';
import PostsPage from './pages/PostsPage'
import store from './redux'
import TopBar from './components/TopBar'

class App extends Component {
  componentWillMount() {
    fetch('/static/user.json')
      .then(data => data.json())
      .then(user => {
        store.dispatch({
          type: 'AUTH_USER_SET',
          payload: user
        })
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="App">
        <TopBar />
        <PostsPage />
      </div>
    );
  }
}

export default App;
