import { useState } from 'react';

import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/theme';
import { nanoid } from "nanoid";
import Swal from "sweetalert2";

import { useLocalStorage } from 'hooks/useLocalStorage';

import { Container } from "./Container/Container";
import { MainTitle } from './Titles/MainTitle/MainTitle'
import { ContactForm } from "./ContactForm/ContactForm";
import { SecondaryTitle } from "./Titles/SecondaryTitle/SecondaryTitle";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts',[{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },])
  const [filter, setFilter] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements[0].value
    const number = form.elements[1].value
    const values = {
      name, number
    };
    addNewContact(values);
    form.reset();
  }

  const addNewContact = values => {
    const { name, number } = values;
    const newContact = {
      id: nanoid(),
      name,
      number
    }
      if (contacts.map((({name}) => name.toLowerCase())).includes(name.toLowerCase())) {
       Swal.fire({
  title: `${name} is already in contacts.`,
  icon: 'info',
  confirmButtonText: 'Okay'
         })
      } else {
     setContacts([newContact, ...contacts]) 
    }  
  }

  const handleFilter = e => {
    setFilter(e.currentTarget.value)
    renderFilterList()
  }

  const renderFilterList = () => {
    return contacts
      .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())) 
  }

  const deleteContact = id => {
    setContacts(contacts.filter((contact => contact.id !== id)))
  }

  return (
         <ThemeProvider theme={theme}>
      <Container display="flex" flexDirection="column" alignItems="center" padding="3">
        <MainTitle title='Phonebook' />
        <ContactForm  getData={handleSubmit}/>
        <SecondaryTitle title='Contacts' />
        <Filter title='Find contacts by name' handleFilter={handleFilter} />
        <ContactList filterContacts={renderFilterList()} contacts={contacts} deleteContact={deleteContact} />
      </Container>
      </ThemeProvider>
  )  
}