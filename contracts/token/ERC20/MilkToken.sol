pragma solidity ^0.5.0;

import "./ERC20Capped.sol";
import "./ERC20Burnable.sol";
import "./ERC20.sol";
import "./ERC20Detailed.sol";

contract MilkToken is ERC20Capped, ERC20Burnable, ERC20Detailed {
    constructor(uint256 initialAmount, uint256 cap, string memory name, string memory symbol) 
	ERC20Capped(cap) 
    ERC20Detailed(name, symbol, 18)
	public
	{
		_mint(msg.sender, initialAmount);
	}
}