// pages/api/contract.js
require('dotenv').config()
import { ethers } from "ethers";



export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const provider = new ethers.providers.JsonRpcProvider("<YOUR_ETHEREUM_NODE_URL>");
      const contractAddress = process.env.CONTRACT_ADDRESS

      const contract = new ethers.Contract(contractAddress, contractABI, provider);

      // Call your smart contract functions here
      const loyaltyPoints = await contract.checkLoyaltyPoints();

      res.status(200).json({ loyaltyPoints });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}
