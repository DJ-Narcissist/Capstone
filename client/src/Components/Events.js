import React from "react";
import './Events.css'

const Event = ({ event }) => {
    if (!event || typeof event.title === 'undefined') {
        return <div>Event details not available.</div>
    } 

    return(
        <div className="event">
            <h3>{event.title}</h3>
            <p>{event.description}</p>

        </div>
    );
}


export default Event;