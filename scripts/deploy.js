const hre = require("hardhat");

async function main() {
  
  const _setgetdata = await ethers.deployContract("setgetdata");

  console.log(" Contract Address: ", await _setgetdata.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
