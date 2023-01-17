import { useState, useEffect, useMemo } from 'react';
import { ethers} from 'ethers';
import "./NftviewApp.css";

function App() {
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [communiTeesOwnedNFTs, setCommuniTeesOwnedNFTs] = useState([]);
  const [communiTeesImageURLs, setCommuniTeesImageURLs] = useState([]);
  const [communiTeesNames, setCommuniTeesNames] = useState([]);
  const [royalTeesOwnedNFTs, setRoyalTeesOwnedNFTs] = useState([]);
  const [royalTeesImageURLs, setRoyalTeesImageURLs] = useState([]);
  const [royalTeesNames, setRoyalTeesNames] = useState([]);
 


  const { ethereum } = window;
  const provider = useMemo(() => new ethers.providers.Web3Provider(window.ethereum),[]);
  const communiTeesContractAddress = '0x633763D9174d6B772676920b2309b39eE3A92a8a';
  const royalTeesContractAddress = '0x903efDA32f6d85ae074c1948C8d6B54F2421949f';
  const communiTeesContractABI = require('../components/contract ABIs/CommuniTeesABI.json');
  const royalTeesContractABI = require('../components/contract ABIs/RoyalTeesABI.json');
  
  const communiTeesContract = useMemo(() => new ethers.Contract(communiTeesContractAddress, communiTeesContractABI, provider), [communiTeesContractAddress, communiTeesContractABI, provider]);
  const royalTeesContract = useMemo(() => new ethers.Contract(royalTeesContractAddress, royalTeesContractABI, provider), [royalTeesContractAddress, royalTeesContractABI, provider]);
  
  
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
    async function fetchOwnedNFTs() {
      console.log("fetchOwnedNFTs function is called");
      try {
        const communiTeesOwnedNFTs = [];
        const royalTeesOwnedNFTs = [];
        let index = 0;
        let royalTeesIndex = 0;
        let tokenId;
        let balanceOf;
        let royalBalanceOf;
        let counter = 0;
        let royalTeesCounter = 0;
  
        // Retrieve the balance of the CommuniTees contract
        balanceOf = await communiTeesContract.balanceOf(accountAddress);
        // Use the balance of the contract as the maximum number of iterations
        const communiTeesMaxIterations = balanceOf.toNumber();
        // Get the owned NFTs for the CommuniTees contract
        while (counter < communiTeesMaxIterations) {
          try {
            tokenId = await communiTeesContract.tokenOfOwnerByIndex(accountAddress, index);
            console.log(tokenId.toString());
            communiTeesOwnedNFTs.push(tokenId.toString());
            index++;
          } catch (error) {
            console.error(error);
            break;
          }
          counter++;
        }
        setCommuniTeesOwnedNFTs(communiTeesOwnedNFTs.map(ownedNFT => ownedNFT.toString()));
  
          // Retrieve the balance of the RoyalTees contract
          royalBalanceOf = await royalTeesContract.balanceOf(accountAddress);
          // Use the balance of the contract as the maximum number of iterations
          const royalTeesMaxIterations = royalBalanceOf.toNumber();
          // Get the owned NFTs for the RoyalTees contract
          while (royalTeesCounter < royalTeesMaxIterations) {
            try {
              tokenId = await royalTeesContract.tokenOfOwnerByIndex(accountAddress, royalTeesIndex);
              console.log(tokenId.toString());
              royalTeesOwnedNFTs.push(tokenId.toString());
              royalTeesIndex++;
            } catch (error) {
             console.error(error);
               break;
             }
         royalTeesCounter++;
        }
        console.log(royalTeesIndex)
        console.log(royalTeesOwnedNFTs)
        setRoyalTeesOwnedNFTs(royalTeesOwnedNFTs.map(royalTeesOwnedNFTs => royalTeesOwnedNFTs.toString()));

      } catch (error) {
        // Handle any other errors
      }
    }
    if (accountAddress) {
      fetchOwnedNFTs();
    }
  }, [accountAddress, communiTeesContract, royalTeesContract]);            
  
  useEffect(() => {
    async function fetchImageURLs() {
        try {
          const communiTeesImageURLs = [];
          const communiTeesNames = [];
          for (const tokenId of communiTeesOwnedNFTs) {
            const tokenURI = await communiTeesContract.tokenURI(tokenId);
            const response = await fetch(tokenURI);
            const tokenData = await response.json();
            communiTeesImageURLs.push(tokenData.image);
            communiTeesNames.push(tokenData.name);
          }
          setCommuniTeesImageURLs(communiTeesImageURLs);
          setCommuniTeesNames(communiTeesNames);
  
          const royalTeesImageURLs = [];
          const royalTeesNames = [];
          for (const tokenId of royalTeesOwnedNFTs) {
            const tokenURI = await royalTeesContract.tokenURI(tokenId);
            const response = await fetch(tokenURI);
            const tokenData = await response.json();
            royalTeesImageURLs.push(tokenData.image);
            royalTeesNames.push(tokenData.name);
          }
          setRoyalTeesImageURLs(royalTeesImageURLs);
          setRoyalTeesNames(royalTeesNames);
        } catch (error) {
          // Handle any errors
        }
      }
      if (communiTeesOwnedNFTs.length > 0 || royalTeesOwnedNFTs.length > 0) {
        fetchImageURLs();
      }
  }, [communiTeesOwnedNFTs, royalTeesOwnedNFTs, communiTeesContract, royalTeesContract]);



  function CommuniTeesNFTImage(props) {
    return (
      <div>
        <img src={props.imageURL} alt="NFT" />
        <p>{props.name}</p>
      </div>
    );
  }
  
  function RoyalTeesNFTImage(props) {
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
            <p className="connected-message">Connected Successfully &nbsp;&nbsp;&nbsp;Wallet Address: &nbsp;{accountAddress.slice(0, 4)}...
            {accountAddress.slice(38, 42)}</p>
          ) : (
            <button className="connect-button" onClick={connectWallet}>
              Open Fantom Wardrobe
            </button>
          )}
        </div>
        {isConnected ? (
          <>
            <div className="nft-container">
              {communiTeesOwnedNFTs.length > 0 ? (
                <>
                  <h1 className="title">CommuniTees Collection</h1>
                  <div className="nft-cards">
                    {communiTeesOwnedNFTs.map((nft, i) => (
                      <div className="nft-card" key={nft}>
                        <CommuniTeesNFTImage imageURL={communiTeesImageURLs[i]} />
                        <h4>{communiTeesNames[i]}</h4>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p>No NFTs owned</p>
              )}
            </div>
            <div className="nft-container">
              {royalTeesOwnedNFTs.length > 0 ? (
                <>
                  <h1 className="title">RoyalTees Collection</h1>
                  <div className="nft-cards">
                    {royalTeesOwnedNFTs.map((nft, i) => (
                      <div className="nft-card" key={nft}>
                        <RoyalTeesNFTImage imageURL={royalTeesImageURLs[i]} />
                        <h4>{royalTeesNames[i]}</h4>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p>No NFTs owned</p>
              )}
            </div>
          </>
        ) : null}
      </>
    ) : (
      <p>Please Install MetaMask</p>
    )}
  </div>
);
    }

export default App;


  