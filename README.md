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
  - Contract deployer is the owner
  - Owner can change the owner to be someone else
- Minting functionality
  - Only available to the contract owner
  - Mints new tokens to the owner's address
- Burning functionality
  - Only available to the contract owner
  - Can only burn own tokens
- Maximum token amount cap
    - The cap can't be breached with minting

## Deployment

As mentioned above the contracts can't be deployed to Tron network with the accompanied configurations. New Tron-specific configurations are needed.

## Unit tests

All relevant unit tests from OpenZeppelin are included.
On top of these, custom unit tests are added for the custom token functionality.

# Considerations for future needs

## Multiple access levels
In the future the token contract may need multiple levels of access. This is not directly possible with the current functionality but a separate user contract can be created which delegates access to the token functionality.

## Upgradable contracts

All contracts are immutable by nature. However, contracts can be made upgradable so part of their functionality can be upgraded by deploying a new contract.

# Configuration

The token (MilkToken.sol) needs to be configured upon deployment. The following arguments need to be given to the token upon deployment:
- uint256 initialAmount: the initial amount of tokens to create upon deployment
- uint256 cap: the maximum amount of tokens that can exist
- string name: name for the token
- string symbol: symbol for the token (shorthand for the name)

The token has 18 decimal places.




