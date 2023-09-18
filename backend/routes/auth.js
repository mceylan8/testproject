const express = require('express');
const router = express.Router();
const db = require('../db.js'); // Pfad zu db.js anpassen, falls nötig

router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    if (db.signup(username, password)) {
        res.status(200).json({ message: 'Registrierung erfolgreich!' });
    } else {
        res.status(400).json({ message: 'Benutzername bereits vorhanden.' });
    }
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const credentials = db.login(username, password);
    if (credentials) {
        const sessionToken = generateSessionToken();
        
        // Das Token in der Sitzung speichern
        req.session.token = sessionToken;
        
        // Eine Weiterleitungsantwort senden
        res.status(200).json({ redirectTo: '/timetracking' });

        res.status(200).json(credentials);
    } else {
        res.status(401).json({ message: 'Ungültige Anmeldedaten.' });
    }
});

router.post('/logout', (req, res) => {
    const authToken = req.body.token;
    db.deleteToken(authToken);
    res.status(200).json({message: 'Erfolgreich ausgeloggt'})
});

module.exports = router;
