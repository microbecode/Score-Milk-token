// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "./ERC20Capped.sol";
import "./ERC20.sol";
import "../../access/Ownable.sol";

contract MilkToken is ERC20Capped, Ownable {
    constructor(uint256 initialAmount, string memory _name, string memory _symbol) 
	ERC20Capped(initialAmount) 
    ERC20(_name, _symbol)
	public
	{
		_mint(msg.sender, initialAmount);
	}

	function mint(uint amount) onlyOwner public {
		_mint(msg.sender, amount);
	}

	function burn(uint amount) onlyOwner public {
		_burn(msg.sender, amount);
	}
}