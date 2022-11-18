import PropTypes from 'prop-types';

import { List, Btn } from "./FeedbackFormStyled";

const FeedbackForm = ({ options, onLeaveFeedback }) => {
    return (
        <List>
            {options.map(option => 
                <li key={option}>
                    <Btn onClick={() => onLeaveFeedback(option)}>{ option }</Btn>
                </li>
                )}
        </List>
    )
}

export default FeedbackForm;

FeedbackForm.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}