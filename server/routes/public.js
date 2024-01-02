const express = require('express');
const router = express.Router();

const EventModel = require('../models/event');
const MixModel = require('../models/mix');


// Route for Homepage
router.get('/', (req, res) => {
    res.send("Welcome To DJ Narcissist's website")
});

// Route to get all upcoming events
router.get('/events/upcoming', async (req, res) => {
    try {
        const upcomingEvents = await EventModel.findUpcoming();
        res.json(upcomingEvents);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Route to get all mixes
router.get('/mixes', async (req, res) => {
    try {
        const mixes = await MixModel.findAll();
        res.json(mixes);
    } catch (err) {
        res.status(500).send(err.message);
    }
});





module.exports = router;
