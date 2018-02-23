const jwt = require('jsonwebtoken')

jwt.verify(token, 'kmzway87aa', function (err, decoded) {
  console.log(decoded)
});
