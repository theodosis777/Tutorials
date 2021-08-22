import React, { Component, Fragment } from 'react';
import './App.css';
import PicsList from './components/picsList';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className='App'>
          <h1>test</h1>
        </div>
        <PicsList />
      </Fragment>
    );
  }
}

export default App;
