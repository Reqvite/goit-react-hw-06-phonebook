import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
import { deleteContact } from 'redux/contactsSlice';

import { Name, DeleteBtn } from './Contact.styled'


export const Contact = ({ contact }) => {
    const { id, name, number } = contact;

    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(id));
    
    return (
     <>
            <Name>
                {name}
             </Name>
             <span>{number}</span>
             <DeleteBtn type="button" onClick={handleDelete}>Delete</DeleteBtn>
    </>
)
   
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}