const chai = require('chai');
const assert = chai.assert;

const validateEmail = require('../src/helpers/validateEmail')
const getWinner = require('../src/helpers/getWinner')

let dummy = {
  "-L6-uQifX7wzEQOZKcz6": {
    "email": "tobi@tobi.com",
    "isLogin": false,
    "name": "Lalala",
    "password": "123",
    "score": 35
  },
  "-L6-uWBrNBPjNzRnSDb_": {
    "email": "b@tobi.com",
    "isLogin": true,
    "name": "false",
    "password": "123",
    "score": 240
  },
  "-L6-ull_4RXqh0sUJ9vB": {
    "email": "mluthfi.com",
    "isLogin": true,
    "name": "Jenndol",
    "password": "ONLINE",
    "score": 50
  },
  "-L6-vyvZAsjvq5Mghz5H": {
    "email": "eko@com",
    "isLogin": true,
    "moves": "WASDA",
    "name": "Eko",
    "password": "1123",
    "score": 0
  }
}

describe('Helpers', function () {

  describe('#validateEmail', function () {
    it('should pass these requirements', function (done) {
      let falseEmail = validateEmail('aku    ganteng');
      let trueEmail = validateEmail('aku@ganteng.com')
      assert.equal(falseEmail, false);
      assert.equal(trueEmail, true);
      done();
    });
  });

  describe('#getWinner', function () {
    it('should pass these requirements', function (done) {
      let winner = getWinner(dummy);
      let haveTo = {
        id: '-L6-uWBrNBPjNzRnSDb_',
        isLogin: true,
        name: 'false',
        score: 240
      }      
      assert.equal(winner.id, haveTo.id);
      assert.equal(winner.name, haveTo.name);
      assert.equal(winner.score, haveTo.score);
      done();
    });
  });
});