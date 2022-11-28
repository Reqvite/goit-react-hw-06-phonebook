import { useSelector } from 'react-redux';
import { List, Notification, ListItem } from "./ContactList.style";

import { Contact } from 'components/Contact/Contact'; 

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter)

 const renderFilterList = () => {
    return contacts
      .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())) 
  }
  
 const filterContacts = renderFilterList()
  
    return (
      <List>
          {contacts.length === 0
               ? <Notification>You don't have contacts.</Notification>
               :filterContacts.length === 0
               ? <Notification>No contacts were found matching your request.</Notification>
               :filterContacts.map(contact => 
                <ListItem key={contact.id} >
                <Contact contact={contact}/>
                </ListItem> )}  
        </List>
    )
}



