// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    ropsten: {
      host: "127.0.0.1",
      port: 8545,
      network_id: 3,
      // gas: 40000,
      // gasLimit : 9999999999
    },
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*', // Match any network id

    }
  }
}
