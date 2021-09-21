// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers, upgrades } = require("hardhat");

async function main() {


  // We get the contract to deploy
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await upgrades.deployProxy(Greeter,["Hello, Hardhat!"]);

  const BVGToken = await ethers.getContractFactory("BVGToken");
  const bvgToken = await BVGToken.deploy("Bloom Verga", "BVG");

  await greeter.deployed();
  await bvgToken.deployed();

  console.log("Greeter deployed to:", greeter.address);
  console.log("BVG Token deployed to:", bvgToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
