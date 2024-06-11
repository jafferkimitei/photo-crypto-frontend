
import React, { useState } from 'react';
import web3 from '../web3';
import photoCoin from '../PhotoCoin';

const ContractInteraction = () => {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');

  const loadAccountData = async () => {
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);

    const balance = await photoCoin.methods.balanceOf(accounts[0]).call();
    setBalance(balance);
  };

  return (
    <div>
      <button onClick={loadAccountData}>Load Account Data</button>
      <p>Account: {account}</p>
      <p>Balance: {balance}</p>
    </div>
  );
};

export default ContractInteraction;
