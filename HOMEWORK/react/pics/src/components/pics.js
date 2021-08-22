import React, { Component } from 'react';

class pics extends Component {
  render() {
    const { picture } = this.props;
    return (
      <div className='card text-center'>
        <img src={picture} alt='' width='200px' height='200px' />
      </div>
    );
  }
}

export default pics;
