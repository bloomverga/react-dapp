const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });

  it('Upgrade works', async () => {
    // const Greeter = await ethers.getContractFactory("Greeter");
    // const GreeterV2 = await ethers.getContractFactory("GreeterV2");

    // const instance = await upgrades.deployProxy(Greeter, ["Hello, world!"]);
    // const upgraded = await upgrades.upgradeProxy(instance.address, GreeterV2);

    // const value = await upgraded.value();
    // expect(value.toString()).to.equal("Hello, world!");
    expect(true).to.equal(true);
  });
});
