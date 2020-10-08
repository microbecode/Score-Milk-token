# ScoreMilk
Smart Contracts for Score Milk gaming platform, https://scoremilk.com/

Currently only basic ERC20 (or TRC20) token functionality is implemented.

# Technologies

This repository is implemented with Solidity on top of an Ethereum framework. The actual deployment of the contracts will happen to Tron network - the deployment settings in this repository will not be valid for Tron.

Used technologies in this repository:
- Solidity 0.6.0 for contracts
- JavaScript Mocha for unit tests
- Truffle for running tests and and (Ethereum) deployment
- Ganache as local blockchain (although no automation for it)

## Smart contracts

The contracts are based on OpenZeppelin's contract framework (version 2.5), taken in October 2020. No modifications are done to the original template contracts except for the following exceptions:
- Removed usage of the OpenZeppelin's Context contract as that is not valid/useful for Tron
- MilkToken contract is our own token implementation derived from the OpenZeppelin templates

## Implemented functionality

The token is an ERC20 compliant ( https://theethereum.wiki/w/index.php/ERC20_Token_Standard ) token.

- Standard ERC20 functionality
- Minting functionality
  - Only available to the minter role. Minter role is by default given to the contract owner
  - Minter role can be given to extra addresses with the `addMinter` function
  - Mints new tokens to the given address
- Burning functionality
  - Can burn own tokens
  - Can burn someone else's tokens as long as the tokens have been approved with the `approve` function
- Maximum token amount cap
    - The cap can't be breached with minting

### Maximum cap requirement

It is not possible to create more tokens than the total cap, neither by public minting nor by contract instantiation.

### Burn requirement

Tokens can be burned from your own balance and from another user's balance, assuming the required allowance is in place.

Token holders should only be able to receive their tokens when it is 100 % certain that the said tokens will not need to be burned. For example staking rewards can be given to the user only when it's certain that they don't meet the "first day burn" nor the "early withdrawal burn" requirements.

### Mint requirement

Users with the minter role can mint new tokens to any address.
The total amount of tokens can not exceed the total cap.

## Unit tests

All relevant unit tests from OpenZeppelin are included.
On top of these, custom unit tests are added for the main functionalities and to make sure contract instantiation works correctly.

# Considerations for future needs

## Multiple access levels
In the future the token contract may need multiple levels of access. This is not directly possible with the current functionality but a separate user contract can be created which delegates access to the token functionality.

## Upgradable contracts

All contracts are immutable by nature. However, contracts can be made upgradable so part of their functionality can be upgraded by deploying a new contract. This process will need to be thought through carefully as it will change the nature of infrastructure.

# Configuration

The token (MilkToken.sol) needs to be configured upon deployment. The following arguments need to be given to the token upon deployment:
- uint256 `initialAmount`: the initial amount of tokens to create upon deployment
- uint256 `cap`: the maximum amount of tokens that can exist
- string `name`: name for the token
- string `symbol`: symbol for the token (shorthand for the name)

The token has 18 decimal places.

## Deployment

As mentioned above the contracts can't be deployed to Tron network with the accompanied configurations. New Tron-specific configurations are needed.

Probably the hardest thing to configure is the amount of tokens needed. If, for example, the maximum amount of tokens users see is 100 million then the contract can't be simply deployed with `initialAmount` of 100 million. The token has 18 decimal places so you need to deploy the token with 100 million * (10 ^ 18) as `initialAmount`. You can read more about this distinction for example here: https://ethereum.stackexchange.com/a/72481/31933




