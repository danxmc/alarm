const mongooseLib = require('mongoose');
const config = require('config');

mongooseLib.Promise = global.Promise || Promise;

const Users = require("./seeders/users.seeder");

module.exports = {

  // Export the mongoose lib
  mongoose: mongooseLib,

  // Export the mongodb url
  mongoURL: config.get('mongoURI') || process.env.MONGO_URL,

  /*
    Seeders List
    ------
    order is important
  */
  seedersList: {
    Users
  }
};
