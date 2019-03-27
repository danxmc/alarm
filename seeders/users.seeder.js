const Seeder = require('mongoose-data-seed').Seeder;
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const config = require('config');

const data = [
  {
    name: "admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync(config.get('adminPass'), 10),
    role: "admin"
  }
];

class UsersSeeder extends Seeder {
  async shouldRun() {
    return User.countDocuments()
      .exec()
      .then(count => count === 0);
  }

  async run() {
    return User.create(data);
  }
}

module.exports = UsersSeeder;
