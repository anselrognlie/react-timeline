import PropTypes from 'prop-types';
import TimelineEventShape from './TimelineEventShape';

const TimelineDataShape = PropTypes.shape({
    person: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(TimelineEventShape)
});

export default TimelineDataShape;
