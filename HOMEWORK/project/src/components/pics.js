import React, { Component } from 'react';

function checkUrl() {
  var newURL =
    window.location.protocol +
    '://' +
    window.location.host +
    '/' +
    window.location.pathname;
  alert(newURL);
}

class pics extends Component {
  render() {
    const { picture } = this.props;
    return (
      <div className='card text-center'>
        <img src={picture} alt='' width='250' height='250' onClick={checkUrl} />
      </div>
    );
  }
}

export default pics;
