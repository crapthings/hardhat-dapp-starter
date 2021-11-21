// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Dapp {
  string public str = 'hardhat-dapp-starter';

  function getStr () public view returns (string memory) {
    console.log("log: str is equal to", str);
    return str;
  }
}
