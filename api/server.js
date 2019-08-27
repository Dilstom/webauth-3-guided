const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const jwt = require('jsonwebtoken');
// const secrets

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
 res.send("It's alive!");
});

server.get('/token', (req, res) => {
 const role = 'admin';
 const payload = {
  // sbject is normally the user's id
  subject: 'user', // translate into the 'sub' property on the token
  username: 'usernameJ',
  role,
  favoriteChili: 'habanero',
 };
 const secret = 'wethotuwasatoad';
 const options = {
  expiresIn: '8h',
 };

 const token = jwt.sign(payload, secret, options);
 //  res.json(token); // status 200 by default
 res.status(200).json({ role: role, token }); // status 200 by default
});

module.exports = server;
