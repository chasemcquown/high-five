const { userInterest } = require("../models");

const UIdata = [
  {
    user_id:1,
    interest_id:1
  },
  {
    user_id:2,
    interest_id:2
  },
  {
    user_id:1,
    interest_id:5
  },
  {
    user_id:1,
    interest_id:3
  }
 
];

const seedUserInterest = () => userInterest.bulkCreate(UIdata);

module.exports = seedUserInterest;
