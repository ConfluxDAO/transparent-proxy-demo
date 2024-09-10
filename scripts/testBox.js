const { ethers } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("Box");
  const box = Box.attach("0x8B69653b7a5859938834F7079E1e525dF6D06b02");

  // 存储一个新值
  await box.store(23);

  // 获取值
  const value = await box.retrieve();
  console.log("Box value:", value.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });