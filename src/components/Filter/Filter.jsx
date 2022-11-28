import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { contactsFilter } from 'redux/actions';
import { FilterTitle, FilterInput } from "./Filter.styled"
export const Filter = (({title}) => {
   
const dispatch = useDispatch()

    const handleFilter = e => dispatch(contactsFilter(e.target.value))

    return (
        <>
        <FilterTitle>{title}</FilterTitle>
        <FilterInput type="text" onChange={handleFilter}/>
        </>
    )
})

Filter.propTypes = {
    title: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
}