const { User } = require("../models");

const userdata = [
  {
    username: "alesmonde0",
    email: "email2@email.com",
    password: "password123",
  },
  {
    username: "jwilloughway1",
    email: "email3@email.com",
    password: "password123",
  },
  {
    username: "jwilloughway12",
    email: "rmebes1@sogou.com",
    password: "password123",
  },
  {
    username: "iboddam2",
    email: "cstoneman2@last.fm",
    password: "password123",
  },
  {
    username: "dstanmer3",
    email: "ihellier3@goo.ne.jp",
    password: "password123",
  },
  {
    username: "tpenniell7",
    email: "kperigo7@china.com.cn",
    password: "password123",
  },
  {
    username: "msabbins8",
    email: "lmongain8@google.ru",
    password: "password123",
  },
  {
    username: "jmaddcarthur9",
    email: "bsteen9@epa.gov",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
