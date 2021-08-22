import React, { Component } from 'react';
import Pics from './pics';

export class picsList extends Component {
  async componentDidMount() {
    const pageNo = Math.random() * (10 - 1) + 1;
    const baseURL = `https://api.pexels.com/v1/curated?page=${pageNo}&per_page=9`;
    const response = await fetch(baseURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization:
          '563492ad6f917000010000018e0e89c894c34a35abf563996a5b6193',
      },
    });
    const data = await response.json();
    console.log(data.photos);
    this.setState({ pics: data.photos });
  }

  render() {
    return (
      <div>
        <a href='https://frontend-interview-material.vercel.app/'>HOME</a>

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
