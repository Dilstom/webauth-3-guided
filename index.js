const server = require('./api/server.js');

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));

// 4 + 5(Had) + 6(2+4) + 2 + 3 + 3 + 1

// token for authorization/authentication
// cookies for sessions
