import React from 'react';
import Conctacts from '../contacts/Contacts';
import ConctactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <ConctactForm />
      </div>
      <div>
        <ContactFilter />
        <Conctacts />
      </div>
    </div>
  );
};

export default Home;
