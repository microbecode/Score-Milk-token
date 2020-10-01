# ScoreMilk
Smart Contracts for Score Milk gaming platform, https://scoremilk.com/

Currently only a basic ERC20 (or TRC20) token functionality is implemented.

# Technologies

This repository is implemented with Solidity on top of an Ethereum framework. The actual deployment of the contracts will happen to Tron network - the deployment settings in this repository will not be valid for Tron.

Used technologies in this repository:
- Solidity 0.6.0 for contracts
- JavaScript Mocha for unit tests
- Truffle for running tests and and (Ethereum) deployment
- Ganache as local blockchain (although no automation for it)

## Smart contracts

The contracts are based on OpenZeppelin's contract framework, taken in September 2020. No modifications are done to the original template contracts except for the following exceptions:
- Removed usage of the OpenZeppelin's Context contract as that is not valid/useful for Tron
- MilkToken contract is our own token implementation on top of OpenZeppelin templates

## Implemented functionality

The token is an ERC20 compliant ( https://theethereum.wiki/w/index.php/ERC20_Token_Standard ) token.

- Standard ERC20 functionality
- Owner functionality
- Minting functionality (available for owner)
- Burning functionality (available for owner)
- Maximum token amount cap

## Deployment

As mentioned above the contracts can't be deployed to Tron network with the accompanied configurations. New Tron-specific configurations are needed.

## Unit tests

All relevant unit tests from OpenZeppelin are included.
On top of these, custom unit tests are added for the custom token functionality.

# Configuration

The token (MilkToken.sol) needs to be configured upon deployment. The following arguments need to be given to the token upon deployment:
- uint256 initialAmount: the initial amount of tokens to create upon deployment
- uint256 cap: the maximum amount of tokens that can exist
- string name: name for the token
- string symbol: symbol for the token (shorthand for the name)

The token has 18 decimal places.



