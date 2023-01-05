import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import contractABI from '../components/contractABIs/CommuniTeesABI.json';

function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [chainId, setChainId] = useState('');
  const [contract, setContract] = useState(null);

  async function connectWallet() {
    try {
      // Check if the user has already connected their wallet
      if (!window.ethereum.selectedAddress) {
        // Request access to MetaMask
        await window.ethereum.request({ method: 'eth_requestAccounts' });
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    connectWallet();
  }, []);

  useEffect(() => {
    async function checkNetwork() {
      try {
        // Check the user's current network
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        // Convert the chain ID to a number
        const currentChainId = parseInt(chainId.result, 16);

        setChainId(currentChainId);
      } catch (error) {
        console.error(error);
      }
    }

    checkNetwork();
  }, []);

  useEffect(() => {
    async function checkWallet() {
      try {
        // Check if the user has connected a wallet
        if (window.ethereum.selectedAddress) {
          setWalletConnected(true);
          setWalletAddress(window.ethereum.selectedAddress);
        }
      } catch (error) {
        console.error(error);
      }
    }

    checkWallet();
  }, []);

  useEffect(() => {
    async function checkAccount() {
      try {
        // Check the user's current account
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setWalletConnected(true);
          setWalletAddress(accounts[0]);
        }
      } catch (error) {
        console.error(error);
      }
    }

    checkAccount();
  }, []);

  useEffect(() => {
    async function connectToContract() {
      try {
        // Connect to the contract using the provided ABI and address
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          '0x633763D9174d6B772676920b2309b39eE3A92a8a',
          contractABI,
          signer
        );

        setContract(contract);
      } catch (error) {
        console.error(error);
      }
    }

    connectToContract();
  }, []);

  return (
    <div>
      {walletConnected ? (
        <p>
          Wallet connected! Network: {chainId} Wallet address: {walletAddress}
        </p>
      ) : (
        <button onClick={connectWallet}>Connect wallet</button>
      )}
      {contract ? (
        <p>Connected to contract!</p>
      ) : (
        <button onClick={connectToContract}>Connect to contract</button>
        )}
        </div>
      );
    }
    
    export default App;
    