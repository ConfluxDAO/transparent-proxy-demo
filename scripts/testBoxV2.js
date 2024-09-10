const { ethers, upgrades } = require("hardhat");

async function main() {
  // Get the BoxV2 contract factory
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  
  // Assume we already have a deployed proxy contract address
  const proxyAddress = "0x8B69653b7a5859938834F7079E1e525dF6D06b02";
  
  // Connect to the deployed proxy contract
  const boxV2 = await BoxV2.attach(proxyAddress);

  console.log("Testing BoxV2 contract...");

  // Store a new value
  console.log("Storing value 23...");
  const storeTx = await boxV2.store(23);
  await storeTx.wait(); // Wait for transaction confirmation

  // Retrieve the value
  let value = await boxV2.retrieve();
  console.log("BoxV2 current value:", value.toString());

  // Test the newly added increment function
  console.log("Calling increment function...");
  const incrementTx = await boxV2.increment();
  await incrementTx.wait(); // Wait for transaction confirmation

  // Retrieve the value again to verify if increment worked
  value = await boxV2.retrieve();
  console.log("Value after increment:", value.toString());

  // Call increment again
  console.log("Calling increment function again...");
  const incrementTx2 = await boxV2.increment();
  await incrementTx2.wait(); // Wait for transaction confirmation

  // Retrieve the value one last time
  value = await boxV2.retrieve();
  console.log("Final value:", value.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });