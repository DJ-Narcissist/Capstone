
const express = require('express');
const app = express();
const db = require('./db');


app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;
    // Add logic to handle the subscription, e.g., save to a database or mailing list
    console.log('New subscription:', email);
    res.json({ message: "Subscription successful" });
});

app.get('/api/soundcloud', (req, res) => {
    res.json({
        profileUrl: "https://soundcloud.com/dj-narcissist"
    });
});



db.connect('your-connection-string')
.then(() => console.log('Connected to the database successfully'))
.catch(err => {
    console.error('Failed to connect to the database:', err);
    process.exit(1); // Exit the process if cannot connect to the database
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
