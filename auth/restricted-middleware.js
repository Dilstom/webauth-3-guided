// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

// const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
 // in header or body, since http req => header
 // express.session creates method we pass some sessions - all endpoints need

 const secret = secrets.jwtSecret;

 const token = req.headers.authorization;
 //  console.log(token);
 if (token) {
  jwt.verify(token, secret, (err, decodedToken) => {
   if (err) {
    // wrong token
    res.status(401).json({ message: 'wrong token' });
   } else {
    //decoded token
    req.user = {
     username: decodedToken.username,
    };
    req.decodedJwt = decodedToken;
    next();
   }
  });
 } else {
  res.status(401).json({ message: 'get token first' });
 }

 //  const { username, password } = req.headers;

 //  if (username && password) {
 //   Users.findBy({ username })
 //    .first()
 //    .then(user => {
 //     if (user && bcrypt.compareSync(password, user.password)) {
 //      next();
 //     } else {
 //      res.status(401).json({ message: 'Invalid Credentials' });
 //     }
 //    })
 //    .catch(error => {
 //     res.status(500).json({ message: 'Ran into an unexpected error' });
 //    });
 //  } else {
 //   res.status(400).json({ message: 'No credentials provided' });
 //  }
};
