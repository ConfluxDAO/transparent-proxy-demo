// Importing necessary modules from hardhat
const { ethers, upgrades } = require("hardhat");

// Main asynchronous function to deploy the contract
async function main() {
  // Getting the contract factory for Box
  const Box = await ethers.getContractFactory("Box");
  console.log("Deploying Box..."); 
  // Deploying the proxy for Box with an initial value of 42
  const box = await upgrades.deployProxy(Box, [42], { initializer: 'store' });
  await box.waitForDeployment(); // Waiting for the deployment to complete
  // Logging the address where the Box contract is deployed
  console.log("Box deployed to:", await box.getAddress());
}

// Executing the main function and handling errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error); // Logging any errors that occur
    process.exit(1); // Exiting the process with an error code
  });