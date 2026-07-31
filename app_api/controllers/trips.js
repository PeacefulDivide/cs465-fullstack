const mongoose = require('mongoose');

// Register model
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model

        // No filter, return all records
        .find({})
        .exec();

        // Uncomment the following line to show results of query
        // on the console
    
        // console.log(q);

    if(!q) {
        // Database returned no data
        return res
                .status(404)
                .json(err);
    } else {
        // Return resulting trip list
        return res
                .status(200)
                .json(q);
    }
};

// GET: /trips/:tripCode - lists a single trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        // Returns a single record
        .find({'code' : req.params.tripCode })
        .exec();

        // Ucommend the following line to show results of query
        // on the console

        // console.log(q);

        if(!q) {
            // Database returned no data
            return res
                    .status(404)
                    .json(err);
        } else {
            // Return resulting trip 
            return res
                    .status(200)
                    .json(q);
        }
};

module.exports = {
    tripsList,
    tripsFindByCode
};