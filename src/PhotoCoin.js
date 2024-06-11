// src/PhotoCoin.js
import web3 from './web3';
import PhotoCoin from './contracts/PhotoCoin.json';

const contractAddress = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';
const photoCoin = new web3.eth.Contract(PhotoCoin.abi, contractAddress);

export default photoCoin;
