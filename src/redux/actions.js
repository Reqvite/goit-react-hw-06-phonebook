import { nanoid } from "nanoid";
const { createAction} = require("@reduxjs/toolkit");


export const addContact = createAction('contacts/addContact', values => {
    return {
        payload: {
      id: nanoid(),
        ...values
    },
   
    }
})


export const deleteContact = createAction('contacts/deleteContact');

export const contactsFilter = createAction('filter/contactsFilter');
