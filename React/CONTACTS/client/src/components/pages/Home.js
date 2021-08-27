import React from 'react';
import Conctacts from '../contacts/Contacts';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>{/* contact form */}</div>
      <div>
        <Conctacts></Conctacts>
      </div>
    </div>
  );
};

export default Home;
