import PropTypes from 'prop-types';

const TimelineEventShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    person: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
});

export default TimelineEventShape;
