import React from 'react';
import Conctacts from '../contacts/Contacts';
import ConctactForm from '../contacts/ContactForm';
const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <ConctactForm />
      </div>
      <div>
        <Conctacts />
      </div>
    </div>
  );
};

export default Home;
