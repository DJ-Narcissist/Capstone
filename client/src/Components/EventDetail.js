import React from "react";
import './EventDetail.css';

const EventDetail = ({ event }) => {
    return (
        <div className="event-detail">
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
        </div>
    )
}

export default EventDetail;