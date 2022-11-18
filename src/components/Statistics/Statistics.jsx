import PropTypes from 'prop-types';

import { Item } from './StatisticsStyled';

const Statistics = ({good, neutral, bad, total, positiveFeedback = 0 }) => {
    return (
        <ul>
            <Item>Good: {good}</Item>
            <Item>Neutral: {neutral}</Item>
            <Item>Bad: {bad}</Item>
            <Item>Total: {total}</Item>
            <Item>Positive feedback: {positiveFeedback ? positiveFeedback : 0} % </Item>
        </ul>
    )
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
}