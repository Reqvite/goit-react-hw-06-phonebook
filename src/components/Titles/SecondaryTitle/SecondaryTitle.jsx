import PropTypes from 'prop-types';
import { Title } from "./SecondaryTitle.style"

export const SecondaryTitle = (({ title }) => {
    return (
        <Title>{title}</Title>
    )
    
})

SecondaryTitle.propTypes = {
    title: PropTypes.string.isRequired,
}