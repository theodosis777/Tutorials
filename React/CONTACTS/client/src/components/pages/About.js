import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About This App</h1>
      <p className='bg-dark p'>
        <strong> Created by:</strong>Theodosis Demetriou
      </p>
      <p className='my-1'>
        This is a full stack React app for keeping contacts
      </p>
      <p>You need to first register and provide name,email and password</p>
      <p>After you login you can create contacts for your account</p>
      <p>You can also edit,delete or search contacts that you entered</p>
    </div>
  );
};

export default About;
