// https://eth-ropsten.alchemyapi.io/v2/pYMpJCsXOfMCQmhfzQStt-T4Bo8fd31f

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/pYMpJCsXOfMCQmhfzQStt-T4Bo8fd31f' ,
      accounts: ['ca54fed77c7274c172ed752a4262aefe4dc17d6f14f0d15becf06939da444452']
    }
  }
}
