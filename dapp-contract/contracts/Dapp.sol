// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Dapp {
  string private str = 'Hardhat Dapp Starter';
  event changeStr(string str);

  function getStr () public view returns (string memory) {
    console.log("log: str is equal to", str);
    return str;
  }

  function setStr (string memory _str) public {
    console.log("log: set str to", _str);
    str = _str;
    emit changeStr(str);
  }
}
