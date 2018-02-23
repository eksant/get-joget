const jwt = require('jsonwebtoken')

let decode = function (token, callback) {
  jwt.verify(token, 'kmzway87aa', function (err, decoded) {
    callback(err, decoded)
  })
}

export default decode