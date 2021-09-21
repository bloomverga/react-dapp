// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers, upgrades } = require("hardhat");

async function main() {
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await upgrades.upgradeProxy("0xa513E6E4b8f2a923D98304ec87F64353C4D5C853", Greeter);
  console.log("Greeter upgraded to:", greeter.address);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
