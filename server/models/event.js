

const { error, log } = require('console');
const db = require('../db');


class EventModel {
    // Method to find all upcoming events
    static async findUpcoming() {
        // SQL query to get upcoming events
        try {
            console.log('Fetchign upcoming events');
            const result = await db.query(`SELECT * FROM events WHERE date >= CURRENT_DATE`);
            return result.rows; 
        } catch (error) {
            console.error('Error fetching upcoming events:', error)
        }
    }

    // Method to fing all events (including past events)
    static async findAll() {
        try {
            console.log('Fetching all events')
            const result = await db.query(`SELECT * FROM events`);
            return result.rows;
        } catch (error) {
            console.error('Error fetching all events', error);
            throw error;
        }
    }

    // Create a new event
    static async create(eventData) {
        try {
            console.log('Creating new event:', title);
            const { title, date, location, description } = eventData;
            const result = await db.query (
                `INSERT INTO events (title, date, locatio, description)
                VALUES ($1, $2, $3, $4) RETURNING *`,
                [title, date, location, description]
                );
                return result.rows[0];
            } catch (error) {
                console.error('Error creating event', error);
                throw error;
            }
    }

    // Update an existing event
    static async update(eventId, eventData) {
        const { title, date, location, description } = eventData;
        try{
            console.log(`Updating event with ID ${eventId}`);
            const result = await db.query(
                `UPDATE events SET title = $1, date = $2, location = $3, description = $4 
                WHERE id = $5 RETURNING * `, 
                [ title, date, location , description, eventId]
                );
                
                if (result.rows.length === 0) {
                    throw new Error(`No event found with id ${eventId}`);
                }
            } catch (error) {
                console.error(`Error updating the event with ID ${eventId}:`, error)
                throw error;
            }
        return result.rows[0];
    }
    
    // Method to delete an event
    static async delete(eventId) {
        try {
            console.log(`Deleting event wit ID ${eventId}`);
            const result = await db.query(
                `DELETE FROM eventid WHERE id = $1 RETURNING *`,
                [eventId]
            );

            if (result.rows.length === 0) {
                throw new Error (`No event found with id ${eventId}`);
            }
            return result.rows[0];
        } catch {
            console.error(`Error deleting event with ID ${eventId}`, error)
            throw error;
        }
    }


}

module.exports = EventModel;