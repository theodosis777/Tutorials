import React, { Component } from 'react';
import Pics from './pics';

class picsList extends Component {
  state = {
    pics: [
      {
        link: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      },
      {
        link: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      },
      {
        link: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      },
      {
        link: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      },
      {
        link: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      },
      {
        link: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      },
      {
        link: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      },
      {
        link: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      },
      {
        link: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      },
    ],
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.pics.map((pic) => (
          <Pics picture={pic.link}></Pics>
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default picsList;
