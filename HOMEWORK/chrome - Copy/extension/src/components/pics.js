import React, { Component } from 'react';

class pics extends Component {
  render() {
    //initialize props
    const { picture, picLink } = this.props;

    ///WHEN USER CLICKS ON PICTURE
    const picOnClick = () => {
      ///GET THE CURRENT URL FROM STORAGE
      chrome.storage.sync.get(['name'], (res) => {
        ///IF THE URL IS WRONG SHOW ALERT
        if (res.name !== 'https://frontend-interview-material.vercel.app/') {
          alert('Press home to navigate to correct website');
        } else {
          ///IF URL IS CORRECT PUT PIC LINK IN STORAGE
          chrome.storage.sync.set({ SelectedPic: picLink }, function () {});
        }
      });
    };

    return (
      <div style={divStyle} className='card text-center'>
        <img
          src={picture}
          alt=''
          width='150px'
          height='150px'
          onClick={picOnClick}
        />
      </div>
    );
  }
}

const divStyle = {
  backgroundColor: 'lightblue',
};
export default pics;
