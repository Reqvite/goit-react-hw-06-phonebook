import { useDispatch} from 'react-redux';
import { contactsFilter } from 'redux/filterSlice'; 

import { FilterTitle, FilterInput } from "./Filter.styled"
export const Filter = () => {
   
const dispatch = useDispatch()
 
    const handleFilter = e => dispatch(contactsFilter(e.target.value))
    
    return (
        <>
        <FilterTitle>Find contacts by name</FilterTitle>
        <FilterInput type="text" onChange={handleFilter}/>
        </>
    )
}
