const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const TOTAL = await ethers.getContractFactory("TOTAL");
  const total = await TOTAL.deploy(deployer.address); // ← you MUST pass this if constructor needs an address

  await total.waitForDeployment(); // ✅ Hardhat now uses waitForDeployment() instead of .deployed()

  console.log("TOTAL deployed to:", await total.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
