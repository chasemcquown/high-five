//List all seed files here
const seedComments = require("./comment-seeds");
const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");
const seedInterest=require("./interest-seeds")
const seedUserInterest=require("./userInterest-seeds")
const seedUserLikes=require("./likes-seeds")

const sequelize = require("../config/connection");
const seedFollow = require("./follow-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("-----");

  await seedUsers();
  console.log("--------------");
  
  await seedPosts();
  console.log("--------------");
  await seedComments();
  console.log("--------------");
  await seedInterest();
  console.log("--------------");
await seedUserInterest();
console.log("--------------");
await seedUserLikes();
console.log("--------------");
await seedFollow();

  process.exit(0);
};
seedAll();
