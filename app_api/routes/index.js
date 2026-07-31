const express = require('express');
const router = express.Router();

// Importing controllers to be routed
const tripsController = require('../controllers/trips');

// Define routes for trips endpoints
// GET method routes tripsList
router.route('/trips').get(tripsController.tripsList);

// GET method routes tripsFindByCode - require parameter
router.route('/trips/:tripCode').get(tripsController.tripsFindByCode);

module.exports = router;