import React, { Component, Fragment, useState } from 'react';
import PicsList from './picsList';

class Popup extends Component {
  render() {
    ///SET THE HOME URL
    const homeURL = 'https://frontend-interview-material.vercel.app/';
    ///WHEN USER CLICKS ON HOME BUTTON REDIRECT TO HOME
    const homeOnClick = () => {
      chrome.tabs.create({
        url: homeURL,
        active: true,
      });
    };

    return (
      <Fragment style={myStyle}>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        ></link>
        <div className='App' style={myStyle}>
          <button
            type='submit'
            name='formBtn'
            onClick={homeOnClick}
            style={buttonStyle}
          >
            <i class='fa fa-home'>HOME</i>
          </button>
        </div>
        <PicsList />
      </Fragment>
    );
  }
}

const buttonStyle = {
  fontSize: '20px',
  fontFamily: 'Arial',
  align: 'left',
};

const myStyle = {
  backgroundColor: 'lightblue',
};

export default Popup;
