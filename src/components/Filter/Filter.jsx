import PropTypes from 'prop-types';
import { FilterTitle, FilterInput } from "./Filter.styled"
export const Filter = (({title,handleFilter}) => {
   
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