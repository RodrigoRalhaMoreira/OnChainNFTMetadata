require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const MUMBAI_TESTNET_RPC = process.env.MUMBAI_TESTNET_RPC;
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.9",
    networks: {
        mumbai: {
            url: MUMBAI_TESTNET_RPC,
            accounts: [PRIVATE_KEY],
        },
    },
    etherscan: {
        apiKey: POLYGONSCAN_API_KEY,
    },
};
