// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "./ERC20Capped.sol";
import "./ERC20.sol";

contract OwnToken is ERC20Capped {
    constructor(uint256 initialAmount, string memory _name, string memory _symbol) 
	ERC20Capped(initialAmount) 
    ERC20(_name, _symbol)
	public
	{
		
	}
}