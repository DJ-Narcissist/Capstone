const express = require('express');
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const EventModel = require('../models/event');
const router = express.Router();

router.use(isAuthenticated, isAdmin);

// Get all upcoming events
router.get('/upcoming', async (req, res) => {
    try {
        const upcomingEvents = await EventModel.findUpcoming();
        res.json(upcomingEvents);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Get all events, including past events (Admin side)
router.get('/all', async (req, res) => {
    try {
        const allEvents = await EventModel.findAll();
        res.json(allEvents);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Add a new event (Admin side)
router.post('/', async (req, res) => {
    try {
        const newEvent = await EventModel.create(req.body);
        res.status(201).json(newEvent);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Update an existing event (Admin side)
router.put('/:eventId', async (req, res) => {
    try {
        const updatedEvent = await EventModel.update(req.params.eventId, req.body);
        res.json(updatedEvent);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Delete an event (Admin side)
router.delete('/:eventId', async (req, res) => {
    try {
        const eventId = req.params.eventId;
        const deletedEvent = await EventModel.delete(eventId);
        if (deletedEvent) {
            res.json({ message: `Event with ID ${eventId} has been deleted` });
        } else {
            res.status(404).send(`Event with ID ${eventId} not found`);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});



module.exports = router;

// For debugging purposes: print out database connection string
console.log("Database URL:", process.env.DATABASE_URL); // Replace with your variable


