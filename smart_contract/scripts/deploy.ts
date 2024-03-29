import { ethers } from "hardhat";

const deploy = async () => {
  const Transactions = await ethers.getContractFactory("Transactions")
  const transactions = await Transactions.deploy()

  await transactions.deployed()

  console.log("Transactions deployed to:", transactions.address)
}

const runDeploy = async () => {
  try {
    await deploy()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

runDeploy()
