const { ethers, upgrades } = require("hardhat");

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Upgrading Box...");
  await upgrades.upgradeProxy("0x8B69653b7a5859938834F7079E1e525dF6D06b02", BoxV2);
  console.log("Box upgraded");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });