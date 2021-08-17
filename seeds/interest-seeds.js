const { Interest } = require("../models");
const InterestData = [
    {
        Interest_Category:"Reading"
    },
    {
        Interest_Category:"Eating"
    },
    {
        Interest_Category:"Technology"
    },
    {
        Interest_Category:"Games"
    },
    {
        Interest_Category:"Coding"
    },
    {
        Interest_Category:"Exercise"
    },
    {
        Interest_Category:"Movies"
    },
    {
        Interest_Category:"Travel"
    },
    {
        Interest_Category:"Animals"
    },
    {
        Interest_Category:"Sports"
    }
];

const seedInterest = () => Interest.bulkCreate(InterestData);

module.exports = seedInterest;
