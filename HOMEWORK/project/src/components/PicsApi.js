import React, { Fragment } from 'react';
import axios from 'axios';

const url = 'https://api.pexels.com/v1/curated?page=2&per_page=40';
const access_token = '563492ad6f917000010000018e0e89c894c34a35abf563996a5b6193';
axios
  .get(url, {
    headers: {
      Authorization: `${access_token}`,
    },
  })
  .then((data) => {
    console.log(data);
  });

const PicsApi = () => {
  return (
    <Fragment>
      <p>TEST</p>
    </Fragment>
  );
};

export default PicsApi;
