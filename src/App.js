import container from "./data/container.png";
import collections from "./data/collections.png";
import connect from "./data/connect.png";
import nftees from "./data/nftees.png";
import partners from "./data/partners.png";
import rare from "./data/rare.png";
import team from "./data/team.png";
import tees from "./data/tees.png";
import ultra from "./data/ultra.png";
import medium from "./data/medium.png";
import tLogo from "./data/t-logo.png";
import twitter from "./data/twitter.png";
import twitch from "./data/twitch.png";
import Collections from "./components/Collections";
import Ultra from "./components/Ultra";
import Rare from "./components/Rare";
import Mynftees from "./components/Nftees";
import Team from "./components/Team";
import Partners from "./components/Partners";
import Menu from "./components/menu";
import { ethers } from "ethers";
import React, { useState,} from 'react';
import Modal from './components/Modal/Modal';
import comingsoon from "./data/comingsoon.jpg";

const HandleCollections = () => {
  let subContainerTitle = document.getElementById("sub-container-title");
  subContainerTitle.innerHTML = "collections";
  let subContainer = document.getElementById("sub-container");
  subContainer.style.zIndex = "1";
  let collectionsPage = document.getElementById("collections-page");
  collectionsPage.style.display = "block";
};
const HandleUltra = () => {
  let subContainerTitle = document.getElementById("sub-container-title");
  subContainerTitle.innerHTML = "ultra exclusive";
  let subContainer = document.getElementById("sub-container");
  subContainer.style.zIndex = "1";
  let ultraPage = document.getElementById("ultra-page");
  ultraPage.style.display = "block";
};
const HandleRare = () => {
  let subContainerTitle = document.getElementById("sub-container-title");
  subContainerTitle.innerHTML = "rare edition";
  let subContainer = document.getElementById("sub-container");
  subContainer.style.zIndex = "1";
  let rarePage = document.getElementById("rare-page");
  rarePage.style.display = "block";
};
const HandleMynftees = () => {
  let subContainerTitle = document.getElementById("sub-container-title");
  subContainerTitle.innerHTML = "my nftees";
  let subContainer = document.getElementById("sub-container");
  subContainer.style.zIndex = "1";
  let rarePage = document.getElementById("mynftees-page");
  rarePage.style.display = "block";
};
const HandleTeam = () => {
  let subContainerTitle = document.getElementById("sub-container-title");
  subContainerTitle.innerHTML = "team";
  let subContainer = document.getElementById("sub-container");
  subContainer.style.zIndex = "1";
  let teamPage = document.getElementById("team-page");
  teamPage.style.display = "block";
};
const HandlePartners = () => {
  let subContainerTitle = document.getElementById("sub-container-title");
  subContainerTitle.innerHTML = "partners";
  let subContainer = document.getElementById("sub-container");
  subContainer.style.zIndex = "1";
  let partnersPage = document.getElementById("partners-page");
  partnersPage.style.display = "block";
};
const Handlemenu = () => {
  let subContainerTitle = document.getElementById("sub-container-title");
  subContainerTitle.innerHTML = "About TEES";
  let subContainer = document.getElementById("sub-container");
  subContainer.style.zIndex = "1";
  let menuPage = document.getElementById("menu-page");
  menuPage.style.display = "block";
};

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  const [isTeesModalOpen, setTeesModalOpen] = useState("");


const TeesModal = () => {
  if (isTeesModalOpen === true){
  const title = <div className="containername">Tees Videos</div>
  const content = (
      <>
      <img src={comingsoon} alt="Logo" width={"25%"} height={"auto"}/>
      <br />
      <br />
      <div>
      <h2>TEES BRAND VIDEO DROPPING DEC. 5</h2>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      </>
    );
  
  return (
      <Modal
        isOpen={isTeesModalOpen}
        onClose={() => setTeesModalOpen(false)}
        title={title}
        content={content}
      />
      )
    }
  }

  // Requests access to the user's META MASK WALLET
  // https://metamask.io
  async function requestAccount() {
    console.log('Requesting account...');

    // ❌ Check if Meta Mask Extension exists
    if(window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  }

  // Create a provider to interact with a smart contract
  async function connectWallet() {
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }
  return (
    <div className="container">
      <div className="hero">
        <img src={container} alt="" />
      </div>
      <div className="content">
        <div className="collections-highlight">
          <a href="#collections" onClick={HandleCollections}>
            <img src={collections} alt="" />
          </a>
        </div>
        <div className="team-highlight">
          <a href="#team" onClick={HandleTeam}>
            <img src={team} alt="" />
          </a>
        </div>
        {TeesModal()}
        <div className="tees-highlight">
          <a href="#Tees" onClick={() => setTeesModalOpen(true)}>
            <img src={tees} alt="" />
          </a>
        </div>
        <div className="rare-highlight">
          <a href="#rare" onClick={HandleRare}>
            <img src={rare} alt="" />
          </a>
        </div>
        <div className="ultra-highlight">
          <a href="#ultra" onClick={HandleUltra}>
            <img src={ultra} alt="" />
          </a>
        </div>
        <div className="nftees-highlight">
          <a href="#mynftees" onClick={HandleMynftees}>
            <img src={nftees} alt="" />
          </a>
        </div>
        <div className="partners-highlight">
          <a href="#partners" onClick={HandlePartners}>
            <img src={partners} alt="" />
          </a>
        </div>
        <div className="connect-highlight">
        <button onClick={requestAccount}><img src={connect} alt=""/></button>
        </div>
        <div className="medium-highlight">
          <a href="https://officialnftees.medium.com/" target="_blank" rel="noreferrer">
            <img src={medium} alt="" />
          </a>
        </div>
        <div className="t-highlight">
          <a href="#menu" onClick={Handlemenu}>
            <img src={tLogo} alt="" />
          </a>
        </div>
        <div className="twitter-highlight">
          <a href="https://twitter.com/OfficialNFTees" target="_blank" rel="noreferrer">
            <img src={twitter} alt="" />
          </a>
        </div>
        <div className="twitch-highlight">
          <a href="https://discord.com/invite/EkKahYya9g" target="_blank" rel="noreferrer">
            <img src={twitch} alt="" />
          </a>
        </div>
      </div>
      <div className="sub-container" id="sub-container">
        <div className="sub-container-title">
          <p id="sub-container-title"></p>
        </div>
        <div className="min-container" id="min-container">
          <div className="min-content" id="min-content">
            <div id="ultra-page">
              <Ultra />
            </div>
            <div id="collections-page">
              <Collections />
            </div>
            <div id="rare-page">
              <Rare />
            </div>
            <div id="mynftees-page">
              <Mynftees />
            </div>
            <div id="team-page">
              <Team />
            </div>
            <div id="partners-page">
              <Partners />
            </div>
            <div id="menu-page">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
