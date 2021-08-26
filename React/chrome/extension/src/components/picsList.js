import React, { Component } from 'react';
import Pics from './pics';
import regeneratorRuntime from 'regenerator-runtime';

export class picsList extends Component {
  ///CALL THE API AND LOAD IMAGES
  async componentDidMount() {
    ///RANDOMIZE THE PAGE TO RANDOMIZE THE IMAGES
    const pageNo = Math.random() * (40 - 1) + 1;
    const baseURL = `https://api.pexels.com/v1/curated?page=${pageNo}&per_page=9`;
    const response = await fetch(baseURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization:
          '563492ad6f917000010000018e0e89c894c34a35abf563996a5b6193',
      },
    });
    ///WAIT FOR WEBSERVICE RESPONSE
    const data = await response.json();
    this.setState({ pics: data.photos });
  }

  render() {
    return (
      <div style={userStyle}>
        {this.state &&
          this.state.pics.map((pic) => (
            <Pics
              key={pic.id}
              picture={pic.src['medium']}
              picLink={pic.src['original']}
            ></Pics>
          ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
  //width: '600px',
  //height: '700px',
  backgroundColor: 'lightblue',
  marginTop: '5px',
};

export default picsList;
