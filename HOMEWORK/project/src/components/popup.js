import React, { Fragment } from 'react';
import PicsList from './picsList';

function Popup() {
  function sayHello() {
    location.href = 'https://frontend-interview-material.vercel.app/';
    alert('HELLO');
  }
  return (
    <Fragment>
      <div className='App'>
        <button onClick={sayHello}>HOME</button>
      </div>
      <PicsList />
    </Fragment>
  );
}

const styles = {
  main: {
    width: '600px',
    height: '900px',
  },
};

export default Popup;
