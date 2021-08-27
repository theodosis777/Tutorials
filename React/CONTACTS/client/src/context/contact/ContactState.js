import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';
import contactContext from './ContactContext';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'test',
        email: 'test2@gmail.com',
        phone: '1111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'test3',
        email: 'test3@gmail.com',
        phone: '2222',
        type: 'professional',
      },
      {
        id: 3,
        name: 'test4',
        email: 'test4@gmail.com',
        phone: '4444',
        type: 'personal',
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //Add Contact

  //Delete Contact

  //Set current Contact

  //clear current contact

  //Updata Contact

  //Filter Contacts

  //Clear Filter

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
