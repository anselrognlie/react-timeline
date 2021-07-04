import React from 'react';
import TimelineEventShape from '../types/TimelineEventShape';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = ({ event }) => {
    const { person, status, timestamp } = event;

    return (
        <div className="timeline-event">
            <div className="event-time"><Timestamp time={timestamp} /></div>
            <div className="event-person">{ person }</div>
            <div className="event-status">{ status }</div>
        </div>
    );
};

TimelineEvent.propTypes = {
    event: TimelineEventShape
};

export default TimelineEvent;
