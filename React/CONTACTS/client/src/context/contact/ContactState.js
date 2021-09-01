import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
    current: null,
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //Add Contact
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //Set current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //Updata Contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  //Filter Contacts

  //Clear Filter

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
