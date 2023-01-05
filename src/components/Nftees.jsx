import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import "./NftviewApp.css";

function App() {
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [balance, setBalance] = useState('');
  const [ownedNFTs, setOwnedNFTs] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [names, setNames] = useState([]);


  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contractAddress = '0x633763D9174d6B772676920b2309b39eE3A92a8a';
  const contractABI = require('../components/contract ABIs/CommuniTeesABI.json');
  
  const contract = new ethers.Contract(contractAddress, contractABI, provider);
  
  
  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      setAccountAddress(accounts[0]);
      setAccountBalance(bal);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };

  useEffect(() => {
    async function fetchBalance() {
      const balance = await contract.balanceOf(accountAddress);
      console.log('balance:', balance);
      setBalance(balance);
    }
    if (accountAddress) {
      fetchBalance();
    }
  }, [accountAddress]);

  useEffect(() => {
   async function fetchOwnedNFTs() {
  try {
    const ownedNFTs = [];
    let index = 0;
    let tokenId;
    let balanceOf;
    let counter = 0;
    
    // Retrieve the balance of the contract
    balanceOf = await contract.balanceOf(accountAddress);
    
    // Use the balance of the contract as the maximum number of iterations
    const maxIterations = balanceOf.toNumber(); 
    
    while (counter < maxIterations) {
      try {
        tokenId = await contract.tokenOfOwnerByIndex(accountAddress, index);
        ownedNFTs.push(tokenId);
        index++;
      } catch (error) {
        console.error(error);
        break;
      }
      counter++;
    }
    setOwnedNFTs(ownedNFTs.map(ownedNFT => ownedNFT.toString()));
    const { imageURLs, names } = await getImageURLs();
    setImageURLs(imageURLs);
    setNames(names);
  } catch (error) {
    // Handle any other errors
  }
}

    if (accountAddress) {
      fetchOwnedNFTs();
    }
  }, [accountAddress, contract]);
  
  const getImageURLs = async () => {
    const imageURLs = [];
    const names = [];
    for (const tokenId of ownedNFTs) {
      const tokenURI = await contract.tokenURI(tokenId);
      const response = await fetch(tokenURI);
      const tokenData = await response.json();
      imageURLs.push(tokenData.image);
      names.push(tokenData.name);
    }
    return { imageURLs, names };
  }

  function NFTName(props) {
    return <p>{props.name}</p>
  }
  
  function NFTImage(props) {
    return (
      <div>
        <img src={props.imageURL} alt="NFT" />
        <p>{props.name}</p>
      </div>
    );
  }
  
  
  
 
  return (
    <div className="App">
      {haveMetamask ? (
        <>
          <div className="top-right-container">
            <a href="./App" className="close-button">
              Close
            </a>
          </div>
          <div className="left-container">
            {isConnected ? (
              <p className="connected-message">Connected Successfully</p>
            ) : (
              <button className="connect-button" onClick={connectWallet}>
                Open Fantom Wardrobe
              </button>
            )}
            <div className="wallet-card">
              {isConnected ? (
                <>
                  <div className="card-row">
                    <h3>Wallet Address:</h3>
                    <p>
                      {accountAddress.slice(0, 4)}...
                      {accountAddress.slice(38, 42)}
                    </p>
                  </div>
                  <div className="card-row">
                    <h3>Wallet Balance:</h3>
                    <p>$FTM {accountBalance}</p>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          {isConnected ? (
            <div className="nft-container">
              {ownedNFTs.length > 0 ? (
                <>
                  <h1 className="title">CommuniTees Collection</h1>
                  <div className="nft-cards">
                    {ownedNFTs.map((nft, i) => (
                      <div className="nft-card" key={nft}>
                        <NFTImage imageURL={imageURLs[i]} />
                        <h4>{names[i]}</h4>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p>No NFTs owned</p>
              )}
            </div>
          ) : null}
        </>
      ) : (
        <p>Please Install MetaMask</p>
      )}
    </div>
  );
  

}

    export default App;