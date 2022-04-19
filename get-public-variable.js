const { ethers } = require("ethers");

const portfolioFactoryABI = require("./portfolio-factory-abi.json");

const KOVAN_API_KEY = process.env.KOVAN_API_KEY;
const PORTFOLIO_FACTORY_ADDRESS = "0xeb69833E23155B7ADB37F2c4dEFE80D4EF06379D"

// Connect to mainnet with a Project ID (these are equivalent)
let provider = new ethers.providers.InfuraProvider("kovan", KOVAN_API_KEY);

const portfolioFactoryContract = new ethers.Contract(
    PORTFOLIO_FACTORY_ADDRESS,
    portfolioFactoryABI,
    ethers.providers.getDefaultProvider("kovan")
);
 
 async function getPortfolios() {
    const contractAddress = await portfolioFactoryContract.portfolios(0);
    console.log(contractAddress);
 }

 getPortfolios()