import container from "./data/container.png";
import collections from "./data/collections.png";
import jacket from "./data/umanjacket.jpg"
import AuthVision from "./data/AuthenticVision.jpg";
import QR from "./data/QR.png";
import Fantom from "./data/fantomlogo.png";
import Hbar from "./data/hederaLogo.jpg";
import Avax from "./data/avax.png";
import polygon from "./data/polygon.png";
import shimmer from "./data/shimmer.png";
import video from "./data/Tees.mov";
import mobile_background from "./data/mobile_background.png";
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
import MediaQuery from 'react-responsive';



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
  const [isMenuModalOpen, setMenuModalOpen] = useState("");
  const [isCollectionModalOpen, setCollectionModalOpen] = useState("");
  const [isUltraModalOpen, setUltraModalOpen] = useState("");
  const [isPartnersModalOpen, setPartnersModalOpen] = useState("");
  const [isSocialsModalOpen, setSocialsModalOpen] = useState("");

  const [WhatIsTeesModalOpen, setWhatIsTeesModalOpen] = useState(false)
  const [IsTechnologyModalOpen, setIsTechnologyModalOpen] = useState(false)
  const [ChainsModalOpen, setChainsModalOpen] = useState(false)



const TeesModal = () => {
  if (isTeesModalOpen === true){
  const title = <div className="containername"></div>
  const content = (
      <>
      <img src={comingsoon} alt="Logo" width={"25%"} height={"auto"}/>
      <br />
      <br />
      <div>
      <h2>TEES BRAND VIDEO DROPPING Dec 2022</h2>
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

  const MenuModal = () => {
    if (isMenuModalOpen === true){
    const title = <div className="containername"></div>
    const content = (
        <>
        <br />
        <div role="button" onClick={() => (setWhatIsTeesModalOpen(true), setMenuModalOpen(false))}>What is Tees?</div>
        <br />
        <br />
          <div role="button" onClick={() => (setIsTechnologyModalOpen(true), setMenuModalOpen(false))}>Technology</div>
        <br />
        <br />
        <p>Chains</p>
        <br />
        <br />
        </>
      );

    return (
        <Modal
          isOpen={isMenuModalOpen}
          onClose={() => setMenuModalOpen(false)}
          title={title}
          content={content}
        />
        )
      }
    }

    const CollectionModal = () => {
      if (isCollectionModalOpen === true){
      const title = <div className="containername"></div>
      const content = (
          <>
          <br />
          <p>ROYALTEES Collection</p>
          <br />
          <br />
          <p>COMMUNITEES Collection</p>
          <br />
          <br />
          <p>LIFESTYLE Collection</p>
          <br />
          <br />
          </>
        );

      return (
          <Modal
            isOpen={isCollectionModalOpen}
            onClose={() => setCollectionModalOpen(false)}
            title={title}
            content={content}
          />
          )
        }
      }

      const UltraModal = () => {
        if (isUltraModalOpen === true){
        const title = <div className="containername"></div>
        const content = (
            <>
            <br />
            <p>The Uman Jacket</p>
            <br />
            <img src={jacket} alt="jacket" width={"20%"}/>
            <br />
            <p>This jacket was the masterpiece of the 11-NFTEE collab with acclaimed multi-chain artist, UMAN.
            The canvas itself is a yves saint laurent jean jacket. Tees tags were affixed to the arm and
            back of the jacket by officialnftees, and the uman pictured above was painted on by
            the artist. The piece went up for auction on paintswap on OCT 31st, 2021, and sold for
            8,500 FTM  (~$24,395 USD value at time of sale).</p>
            <br />
            <br />
            </>
          );

        return (
            <Modal
              isOpen={isUltraModalOpen}
              onClose={() => setUltraModalOpen(false)}
              title={title}
              content={content}
            />
            )
          }
        }

        const PartnersModal = () => {
          if (isPartnersModalOpen === true){
          const title = <div className="containername"></div>
          const content = (
              <>
              <br />
              <p>Partners</p>
              <br />
              <br />
              <p>Uman</p>
              <br />
              <br />
              <p>Teens on Acid</p>
              <br />
              <br />
              <p>ClokkWorky</p>
              <br />
              <br />
              <p>Potluck Labs</p>
              <br />
              <br />
              <p>Tombheads</p>
              <br />
              <br />
              <p>FantomPunks</p>
              <br />
              <br />
              </>
            );

          return (
              <Modal
                isOpen={isPartnersModalOpen}
                onClose={() => setPartnersModalOpen(false)}
                title={title}
                content={content}
              />
              )
            }
          }

          const SocialsModal = () => {
            if (isSocialsModalOpen === true){
            const title = <div className="containername"></div>
            const content = (
                <>
                <br />
                <div className="mobile-button"><a href="https://officialnftees.medium.com/" target={"_blank"} rel={"noopener noreferrer"}>Medium</a></div>
                <br />
                <br />
                <div className="mobile-button"><a href="https://twitter.com/OfficialNFTees" target={"_blank"} rel={"noopener noreferrer"}>Twitter</a></div>
                <br />
                <br />
                <div className="mobile-button"><a href="https://discord.com/invite/EkKahYya9g" target={"_blank"} rel={"noopener noreferrer"}>Discord</a></div>
                <br />
                <br />
                </>
              );

            return (
                <Modal
                  isOpen={isSocialsModalOpen}
                  onClose={() => setSocialsModalOpen(false)}
                  title={title}
                  content={content}
                />
                )
              }
            }


            const WhatIsTeesModal = () => {
               if (WhatIsTeesModalOpen === true){
               const title = <div>What is TEES?<br/></div>
               const content = (
                 <>
                  <div>
                  <video src={video} width="300" controls></video>
                  </div>
                  <br />
                   <div>Tees is a web 3 digital fashion brand that seeks to offer secure, premium threads
                     to our technology and fashion-focused community, elevating collectability. We offer
                     engagement through our drop-style events that feature both partners and TEES-branded
                     apparel, all of which is meticulously designed and printed with the highest quality
                     materials available.
                     </div>
                     <br />
                 </>
               );


           return (
                 <Modal
                   isOpen={WhatIsTeesModalOpen}
                   onClose={() => (setWhatIsTeesModalOpen(false), setMenuModalOpen(true))}
                   title={title}
                   content={content}
                 />
                  )
                }
              }
              const TechnologyModal = () => {
                if (IsTechnologyModalOpen === true){
                const title = <div>Technology<br/></div>
                const content = (
                  <>
                  <div className= "row">
                    <div className= "column2">
                  <a href="https://www.authenticvision.com/" target="_blank" rel="noreferrer">
                  <img src={AuthVision} alt="Logo" width={"25%"} height={"auto"}/></a>
                  </div>
                  <div className= "column2">
                  <img src={QR} alt="Logo" width={"25%"} height={"auto"}/>
                   </div>
                   </div>
                    <div><span font-size=".5rem">Base Web 3 Technology – From the beginning, OfficialNFTees has utilized QR codes to
                      enhance the experience of owning one of our NFTs and physical replicas (the combination of
                      which is often referred to as Phygitals). With the addition of our Web 3 Wardrobe ™, users
                      can prove ownership of their NFTs through a simple QR scan.
                      <br />
                      <br />
                      Series 1 Technology – through partnership with Authentic Vision, a world leader in
                      authentication labels, and their Meta Anchor technology, OfficialNFTees has added a
                      layer of security to our physicals. Meta Anchors are a serialized, 1/1 holographic QR
                      labels that are not replicable, even by the machines that created them. This technology
                      adds a layer of verification of authenticity that precedes the proof of ownership over the
                      NFTee in the Web3 Wardrobe ™.</span>
                      <br />
                      <br />
                      </div>
                  </>
                );


            return (
                  <Modal
                    isOpen={IsTechnologyModalOpen}
                    onClose={() => (setIsTechnologyModalOpen(false), setMenuModalOpen(true))}
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
    <div className="parent">
            <MediaQuery query="(min-device-width: 650px)">
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
      </MediaQuery>

      <div className="mobilemain">
      <MediaQuery query="(max-device-width: 649px)">
      <div className="mobilewrapper">
      <div className="mobilecontent">
        <img src={mobile_background} alt="" />
        {TeesModal()}
        {MenuModal()}
        {CollectionModal()}
        {UltraModal()}
        {PartnersModal()}
        {SocialsModal()}
        {WhatIsTeesModal()}
        {TechnologyModal()}
                  <div className="mobile-button-container">
              <div className="mobile-button" role="button" onClick={() => setMenuModalOpen(true)}>About</div>
              <div className="mobile-button" role="button" onClick={() => setCollectionModalOpen(true)}>Collections</div>
              <div className="mobile-button" role="button" onClick={() => setUltraModalOpen(true)}>Ultra</div>
              <div className="mobile-button"><a href="https://nftier.tech/mint/hedera-holiday" target={"_blank"} rel={"noopener noreferrer"}>Mint</a></div>
              <div className="mobile-button" role="button" onClick={() => setPartnersModalOpen(true)}>Partners</div>
              <div className="mobile-button" role="button" onClick={() => setSocialsModalOpen(true)}>Socials</div>
          </div>
      </div>
      </div>
      </MediaQuery>
      </div>
    </div>

  );
}
export default App;
