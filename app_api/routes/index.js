const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken'); // Enable JSON web tokens

// Importing controllers to be routed
const tripsController = require('../controllers/trips');

const authController = require('../controllers/authentication');

// Method to authenticate JWT
function authenticateJWT(req, res, next) {
    // console.log('In Middleware');

    const authHeader = req.headers['authorization'];
    // console.log('Auth Header: ' + authHeader);

    if(authHeader == null)
    {
        console.log('Auth Header Required but NOT PRESENT!');
        return res.sendStatus(401);
    }

    let headers = authHeader.split(' ');
    if(headers.length < 1)
    {
        console.log('Not enough tokens in Auth Header: ' + headers.length);
        return res.sendStatus(501);
    }

    const token = authHeader.split(' ')[1];
    // console.log('Token: ' + token);

    if(token == null)
    {
        console.log('Null Bearer Token');
        return res.sendStatus(401);
    }

    // console.log(process.env.JWT_SECRET);
    // console.log(jwt.decode(token));
    const verified = jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
        if(err)
        {
            return res.sendStatus(401).json('Token Validation Error!');
        }
        req.auth = verified; // Set the auth param to the decoded object
    });
    next(); // Need to continue or this will hang forever
}

// Define route for register endpoint
router.route("/register").post(authController.register);

// Define route for login endpoint
router.route("/login").post(authController.login);


// Define routes for trips endpoints
// GET method routes tripsList
router
    .route('/trips')
    .get(tripsController.tripsList) // Get method routes tripList
    .post(authenticateJWT, tripsController.tripsAddTrip) // Post method Adds a trip

// GET method routes tripsFindByCode - require parameter
// PUT method routes tripsUpdateTrip - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(authenticateJWT, tripsController.tripsUpdateTrip)
    .delete(authenticateJWT, tripsController.tripsDeleteTrip); // Delete method for deleting trip by tripCode

module.exports = router;
