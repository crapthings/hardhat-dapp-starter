// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Dapp {
  string public str = 'hardhat-dapp-starter';

  function getStr () public view returns (string memory) {
    return str;
  }
}
