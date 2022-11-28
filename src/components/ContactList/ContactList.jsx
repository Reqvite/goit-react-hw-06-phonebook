import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { List, Notification, ListItem } from "./ContactList.style";

import { Contact } from 'components/Contact/Contact'; 

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);


    return (
      <List>
             {contacts.map(contact => 
                <ListItem key={contact.id} >
                <Contact contact={contact}/>
                </ListItem>  )}  

        </List>
    )
}

ContactList.propTypes = {
  filterContacts: PropTypes.array.isRequired, 
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
}

           {/* {contacts.length === 0
                ? <Notification>You don't have contacts.</Notification>
               :filterContacts.length === 0
             ? <Notification>No contacts were found matching your request.</Notification>
              : filterContacts.map(({id, name, number}) => 
                <ListItem key={id}>
                    <Name>
                    {name}:
                </Name>
                      <span>{number}</span>
                      <DeleteBtn type="button" onClick={() => deleteContact(id)}>Delete</DeleteBtn>
                </ListItem>    
          )}  */}