
const db = require('../db');


class EventModel {
    // Method to find all upcoming events
    static async findUpcoming() {
        // SQL query to get upcoming events
        const result = await db.query(`SELECT * FROM events WHERE date >= CURRENT_DATE`);
        return result.rows; 
    }

    // Method to fing all events (including past events)
    static async findAll() {
        const result = await db.query(`SELECT * FROM events`);
        return result.rows;
    }

    // Create a new event
    static async create(eventData) {
        const { title, date, location, description } = eventData;
        const result = await db.query (
            `INSERT INTO events (title, date, locatio, description)
             VALUES ($1, $2, $3, $4) RETURNING *`,
             [title, date, location, description]
        );
        return result.rows[0];
    }

    // Update an existing event
    static async update(eventId, eventData) {
        const { title, date, location, description } = eventData
        const result = await db.query(
            `UPDATE events SET title = $1, date = $2, location = $3, description = $4 
             WHERE id = $5 RETURNING * `, 
            [ title, date, location , description]
        );

        if (result.rows.length === 0) {
            throw new Error(`No event found with id ${eventId}`);
        }
        return result.rows[0];
    }
    
    // Method to delete an event
    static async delete(eventId) {
        const result = await db.query(
            `DELETE FROM eventid WHERE id = $1 RETURNING *`,
            [eventId]
        );

        if (result.rows.length === 0) {
            throw new Error (`No event found with id ${eventId}`);
        }
        return result.rows[0];
    }


}

module.exports = EventModel;