var fs = require('fs');
var suite = JSON.parse(fs.readFileSync('./data/suite.json','utf8'));

/* GET Rooms view */
const rooms = (req, res) => {
    res.render('rooms', { title: "Travlr Getaways", suite});
};

module.exports = {
    rooms
}