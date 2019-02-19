const jwt = require('jsonwebtoken');
const config = require('../config.json');

// users hardcoded for simplicity, store in a db for production applications
const users = require('../data/users.json');

module.exports = {
  authenticate,
  getAll
};

async function authenticate({ username, password }) {
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const { password, ...userWithoutPassword } = user;
    const token = jwt.sign({ ...userWithoutPassword }, config.secret);
    return {
      user: { ...userWithoutPassword },
      token
    };
  }
}

async function getAll() {
  return users.map(u => {
    const { password, ...userWithoutPassword } = u;
    return userWithoutPassword;
  });
}
