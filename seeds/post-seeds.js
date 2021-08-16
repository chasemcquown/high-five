const { Post } = require("../models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    content: "Nulla tellus.",
    user_id: 5,
  },
  {
    title: "title from postdata2",
    content: "this content is from user2",
    user_id: 1,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    content: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, ",
    user_id: 4,
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    content: "Curabitur at ipsum ac tellus semper interdum.",
    user_id: 1,
  },
  {
    title: "Nunc purus.",
    content: "here goes the content",
    user_id: 4,
  },
  {
    title: "Pellentesque eget nunc.",
    content: "In hac habitasse platea dictumst",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
