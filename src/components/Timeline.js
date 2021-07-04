import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import TimelineDataShape from '../types/TimelineDataShape';

const Timeline = ({ timelineData }) => {
    const { events } = timelineData;

    return (
        <div className="timeline">
            { events.map(event => {
                return <TimelineEvent key={event.id} event={event} />;
            }) }
        </div>
    );
};

Timeline.propTypes = {
    timelineData: TimelineDataShape
};

export default Timeline;
