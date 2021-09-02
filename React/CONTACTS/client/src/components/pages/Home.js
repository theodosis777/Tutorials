import React, { useContext, useEffect } from 'react';
import Conctacts from '../contacts/Contacts';
import ConctactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/AuthContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);
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
