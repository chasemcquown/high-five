const { Follow } = require("../models");

const followdata = [
  {
    user_id:1,
    follower_id:2
  },
  {
    user_id:1,
    follower_id:3
  },
  {
    user_id:2,
    follower_id:1
  },
  {
    user_id:2,
    follower_id:3
  }
 
];

const seedFollow = () => Follow.bulkCreate(followdata);

module.exports = seedFollow;
