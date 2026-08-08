const express = require('express');
const router = express.Router();

// Importing controllers to be routed
const tripsController = require('../controllers/trips');

// Define routes for trips endpoints
// GET method routes tripsList
router
    .route('/trips')
    .get(tripsController.tripsList) // Get method routes tripList
    .post(tripsController.tripsAddTrip); // Post method Adds a trip

// GET method routes tripsFindByCode - require parameter
// PUT method routes tripsUpdateTrip - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;