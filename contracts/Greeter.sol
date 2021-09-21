//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

contract Greeter is Initializable {
    string private greeting;

    function initialize(string memory _greeting) public initializer {
        console.log("New Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        console.log("Fetching greeting");
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("New Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
