const { Likes } = require("../models");

const Likesdata = [
  {
    user_id:1,
    post_id:1
  },
  {
    user_id:1,
    post_id:2
  },
  {
    user_id:2,
    post_id:5
  },
  {
    user_id:2,
    post_id:3
  }
 
];

const seedUserLikes = () => Likes.bulkCreate(Likesdata);

module.exports = seedUserLikes;
