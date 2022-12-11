import container from "./data/container.png";
import collections from "./data/collections.png";
import jacket from "./data/jacket.gif"
import AuthVision from "./data/AuthenticVision.jpg";
import sweater from "./data/HbarSweater.gif";
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
import MediaQuery from 'react-responsive';
import hat1 from "./data/hat1.png";
import hat2 from "./data/hat2.png";
import hat3 from "./data/hat3.png";
import comm1 from "./data/community-img1.png";
import comm2 from "./data/community-img2.jpg";
import comm3 from "./data/community-img3.png";
import moon from "./data/moon.gif";
import build from "./data/build.gif";
import spooky from "./data/spooky.gif";
import uman from "./data/uman.png";
import uman1 from "./data/uman1.png";
import uman2 from "./data/uman2.png";
import TOA1 from "./data/TOA1.png";
import TOA2 from "./data/TOA2.png";
import TOA3 from "./data/TOA3.png";
import clokk from "./data/clokk.png";
import clokk2 from "./data/clokk2.png";
import clokk3 from "./data/clokk3.png";
import potluck from "./data/potluck.png";
import tomb from "./data/tomb.jpg";
import tomb2 from "./data/tomb.jpeg";
import punk from "./data/punks.png";
import punk2 from "./data/punk2.png";
import babypunk from "./data/babypunk.png";
import WhatisTees from "./data/WhatisTees.mp4";
import Jmoney from "./data/James.png";
import z14 from "./data/Zan.png";
import Jerrod from "./data/Jerrod.png";
import Jen from "./data/Jen.png"



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
  const [isMintModalOpen, setMintModalOpen] = useState("");

  const [WhatIsTeesModalOpen, setWhatIsTeesModalOpen] = useState(false)
  const [IsTechnologyModalOpen, setIsTechnologyModalOpen] = useState(false)
  const [ChainsModalOpen, setChainsModalOpen] = useState(false)

  const [RoyalTeesModalOpen, setRoyalTeesModalOpen] = useState(false)
  const [CommuniTeesModalOpen, setCommuniTeesModalOpen] = useState(false)
  const [LifeStyleModalOpen, setLifeStyleModalOpen] = useState(false)

  const [UmanModalOpen, setUmanModalOpen] = useState(false)
  const [TOAModalOpen, setTOAModalOpen] = useState(false)
  const [ClokkModalOpen, setClokkModalOpen] = useState(false)
  const [PotluckModalOpen, setPotluckModalOpen] = useState(false)
  const [TombModalOpen, setTombModalOpen] = useState(false)
  const [PunkModalOpen, setPunkModalOpen] = useState(false)

  const [TeamModalOpen, setTeamModalOpen] = useState(false)


const TeesModal = () => {
  if (isTeesModalOpen === true){
  const title = <div className="containername"></div>
  const content = (
      <>
      <br />
      <br />
      <div>
      <video src={WhatisTees} width="50%" controls></video>
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
  const TeamModal = () => {
    if (TeamModalOpen === true){
    const title = <div className="containername"></div>
    const content = (
        <>
       <div className="teams">
        <div className="teams__fashionHead-section">
    <div className="row">
     <div class="column2">
      <br />
      <a href="https://twitter.com/0xJMONEY" target="_blank" rel="noreferrer">
      <img src={Jmoney} alt="jmoney" width={"100%"}/></a>jmoney
    </div>
    <div class="column2">
      <br />
      <a href="https://twitter.com/DeFiiGhost" target="_blank" rel="noreferrer">
      <img src={z14} alt="z14" width={"100%"}/></a>Z14
    </div>          
    <div class="column2">
      <br />
      <a href="https://twitter.com/Jerr0d_" target="_blank" rel="noreferrer">
      <img src={Jerrod} alt="Jerrod" width={"100%"}/></a>J3rr0d
    </div>
    <div class="column2">
      <br />
      <a href="https://twitter.com/jen_aprilrain" target="_blank" rel="noreferrer">
      <img src={Jen} alt="Jen" width={"100%"}/></a>Jen
    </div>             
  </div>
    </div>
    </div>
        </>
      );
  
    return (
        <Modal
          isOpen={TeamModalOpen}
          onClose={() => setTeamModalOpen(false)}
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
        <div role="button" onClick={() => (setChainsModalOpen(true), setMenuModalOpen(false))}>Chains</div>
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
          <div role="button" onClick={() => (setRoyalTeesModalOpen(true), setCollectionModalOpen(false))}>RoyalTees Collection</div>
          <br />
          <br />
          <div role="button" onClick={() => (setCommuniTeesModalOpen(true), setCollectionModalOpen(false))}>CommuniTees Collection</div>
          <br />
          <br />
          <div role="button" onClick={() => (setLifeStyleModalOpen(true), setCollectionModalOpen(false))}>LifeStyle Collection</div>
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
            <img src={jacket} alt="jacket" width={"50%"}/>
            <br />
            <div><span className="smalltext">This jacket was the masterpiece of the 11-NFTEE collab with acclaimed multi-chain artist, UMAN.
            The canvas itself is a yves saint laurent jean jacket. Tees tags were affixed to the arm and
            back of the jacket by officialnftees, and the uman pictured above was painted on by
            the artist. The piece went up for auction on paintswap on OCT 31st, 2021, and sold for
            8,500 FTM  (~$24,395 USD value at time of sale).</span></div>
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

        const MintModal = () => {
          if (isMintModalOpen === true){
          const title = <div className="containername"></div>
          const content = (
              <>
              <br />
              <p>Hedera Holiday Sweaters</p>
              <br />
              <img src={sweater} alt="Hbar Sweater" width={"20%"}/>
              <br />
              <p>Hedera Christmas Sweater is a exclusive collection done in collaboration with the Hedera
              foundation, Nfteir, and Potluck Protocol. Physical sweaters can be claimed only once by an
              owner of the NFT. Please check to see if your NFT has been claimed for a physical before
              buying on secondary markets.</p>
              <br />
              <br />
              <a href="https://nftier.tech/mint/hedera-holiday" target={"_blank"} rel={"noopener noreferrer"}>Mint Here</a>
              <br />
              <br />
              </>
            );

          return (
              <Modal
                isOpen={isMintModalOpen}
                onClose={() => setMintModalOpen(false)}
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
              <div role="button" onClick={() => (setUmanModalOpen(true), setPartnersModalOpen(false))}>Uman</div>
              <br />
              <br />
              <div role="button" onClick={() => (setTOAModalOpen(true), setPartnersModalOpen(false))}>Teens on Acid</div>
              <br />
              <br />
              <div role="button" onClick={() => (setClokkModalOpen(true), setPartnersModalOpen(false))}>ClokkWorky</div>
              <br />
              <br />
              <div role="button" onClick={() => (setPotluckModalOpen(true), setPartnersModalOpen(false))}>Potluck Labs</div>
              <br />
              <br />
              <div role="button" onClick={() => (setTombModalOpen(true), setPartnersModalOpen(false))}>Tombheads</div>
              <br />
              <br />
              <div role="button" onClick={() => (setPunkModalOpen(true), setPartnersModalOpen(false))}>FantomPunks</div>
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
                   <div><span className="smalltext">Tees is a web 3 digital fashion brand that seeks to offer secure, premium threads
                     to our technology and fashion-focused community, elevating collectability. We offer
                     engagement through our drop-style events that feature both partners and TEES-branded
                     apparel, all of which is meticulously designed and printed with the highest quality
                     materials available.</span>
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
                    <div><span className="smalltext">Base Web 3 Technology – From the beginning, OfficialNFTees has utilized QR codes to
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


               const ChainsModal = () => {
                if (ChainsModalOpen === true){
                const title = <div>Chains<br/></div>
                const content = (
                  <>
                  <br />
                  <br />
                  <div className= "row">
                    <div className= "column2">
                  <a href="https://www.fantom.foundation/" target="_blank" rel="noreferrer">
                  <img src={Fantom} alt="Logo" width={"45%"} height={"auto"}/></a>
                  </div>
                  <div className= "column2">
                  <a href="https://hedera.com//" target="_blank" rel="noreferrer">
                  <img src={Hbar} alt="Logo" width={"48%"} height={"auto"}/></a>
                   </div>
                   </div>
                   <br />
                    <div>
                      We have launched on Fantom and Hedera Hashgraph
                    </div>
                    <br />
                    <br />
                    <div>
                      The team continues to explore opportunities and plan launches on the following
                      chains at this time
                   </div>
                   <br />
                   <br />
                   <div>
                   <a href="https://www.avax.network/" target="_blank" rel="noreferrer">
                  <img src={Avax} alt="Logo" width={"5%"} height={"auto"}/></a>Avalanche &nbsp;&nbsp;&nbsp;
                   <a href="https://polygon.technology/" target="_blank" rel="noreferrer">
                  <img src={polygon} alt="Logo" width={"5%"} height={"auto"}/></a>Polygon &nbsp;&nbsp;&nbsp;
                  <a href="https://polygon.technology/" target="_blank" rel="noreferrer">
                   <img src={shimmer} alt="Logo" width={"5%"} height={"auto"}/></a>Shimmer
                   </div>
                   <br />
                  </>
                );


            return (
                  <Modal
                    isOpen={ChainsModalOpen}
                    onClose={() => (setChainsModalOpen(false), setMenuModalOpen(true))}
                    title={title}
                    content={content}
                  />
                   )
                 }
               }
               const RoyalTeesModal = () => {
                if (RoyalTeesModalOpen === true){
                const title = <div>RoyalTees Collection<br/></div>
                const content = (
                  <>
                  <div className= "row">
                     <div className= "column2">
                   <img src={moon} alt="Logo" width={"60%"} height={"auto"}/>
                   </div>
                   <div className= "column2">
                   <img src={build} alt="Logo" width={"60%"} height={"auto"}/>
                    </div>
                    <div className= "column2">
                   <img src={spooky} alt="Logo" width={"60%"} height={"auto"}/>
                    </div>
                    </div>
                    <br />
                    <a href="https://paintswap.finance/marketplace/collections/officialnftees-lifestyle-collection" target="_blank" rel="noreferrer">
                    <button className= "button2">Visit collection on PaintSwap</button>
                    </a>
                    <br />
                    <br />
                    <div>Our Genesis 100 OG NFTee Collection was our first, launching on ZooCoin NFT Marketplace 
                   in April of 2021, and subsequently migrating to Paintswap. These NFTees are focused on 
                   celebrating the Fantom Ecosystem. Each holder earns royalties earned by the contract from 
                   primary and secondary sales, and subsequent collections will also funnel royaltees to holders 
                   of these 100 NFTees.
                      <br/>
                      <br />
                      </div>
                  </>
                );
           
           
            return (
                  <Modal
                    isOpen={RoyalTeesModalOpen}
                    onClose={() => (setRoyalTeesModalOpen(false), setCollectionModalOpen(true))}
                    title={title}
                    content={content}
                  />
                   )
                 }
               }
               const CommuniTeesModal = () => {
                 if (CommuniTeesModalOpen === true){
                 const title = <div>CommuniTees Collection<br/></div>
                 const content = (
                   <>
                   <div className= "row">
                     <div className= "column2">
                   <img src={comm1} alt="Logo" width={"60%"} height={"auto"}/>
                   </div>
                   <div className= "column2">
                   <img src={comm2} alt="Logo" width={"60%"} height={"auto"}/>
                    </div>
                    <div className= "column2">
                   <img src={comm3} alt="Logo" width={"60%"} height={"auto"}/>
                    </div>
                    </div>
                    <br />
                    <div className= "row">
                   <div className= "column2">
                    <a href="https://paintswap.finance/marketplace/collections/officialnftees-communitee-collection" target="_blank" rel="noreferrer">
                    <button className= "button2">Visit collection on PaintSwap</button>
                    </a>
                    </div>
                    <div className= "column2">
                    <a href="https://nftkey.app/collections/teescc/" target="_blank" rel="noreferrer">
                    <button className= "button2">Visit collection on NFTKey</button>
                    </a>
                    </div>
                    </div>
                    <br />
                     <div>The CommuniTee Collection pays homage to the OG 8-bit NFT projects on Fantom as well as 
                   several OG protocols and influencers within the the Fantom community. This collection 
                   recognizes that the 100 OG NFTees are not accessible to all members of the community, and 
                   seeks to grow our engagement. This contract will earn Royaltees for 100 OG NFTee holders.
                       <br/><br/>
                       </div>
                   </>
                 );
            
            
             return (
                   <Modal
                     isOpen={CommuniTeesModalOpen}
                     onClose={() => (setCommuniTeesModalOpen(false), setCollectionModalOpen(true))}
                     title={title}
                     content={content}
                   />
                    )
                  }
                }
                const LifeStyleModal = () => {
                 if (LifeStyleModalOpen === true){
                 const title = <div>LifeStyle Collection<br/></div>
                 const content = (
                   <>
                   <div className= "row">
                     <div className= "column2">
                   <img src={hat1} alt="Logo" width={"80%"} height={"auto"}/>
                   </div>
                   <div className= "column2">
                   <img src={hat2} alt="Logo" width={"100%"} height={"auto"}/>
                    </div>
                    <div className= "column2">
                   <img src={hat3} alt="Logo" width={"80%"} height={"auto"}/>
                    </div>
                    </div>
                    <a href="https://paintswap.finance/marketplace/collections/officialnftees-lifestyle-collection" target="_blank" rel="noreferrer">
                    <button className= "button2">Visit collection on PaintSwap</button>
                    </a>
                    <br />
                    <br />
                     <div>
                     This collection features incredibly customized and unique collaborations with artists, 
                   pushing the boundries of artistic mediums and canvases and exploring the idea of "what a 
                   physical NFT can be."
                       <br/>
                       <br/>
                       </div>
                   </>
                 );
            
            
             return (
                   <Modal
                     isOpen={LifeStyleModalOpen}
                     onClose={() => (setLifeStyleModalOpen(false), setCollectionModalOpen(true))}
                     title={title}
                     content={content}
                   />
                    )
                  }
                }
                const UmanModal = () => { 
                  if (UmanModalOpen === true){
                  const title = <div>Uman<br/></div>
                  const content = (
                    <>
                     <div className= "row">
                       <div className= "column2">
                     <img src={uman1} alt="Logo" width={"35%"} height={"auto"}/>
                     </div>
                     <div className= "column2">
                     <img src={uman} alt="Logo" width={"40%"} height={"auto"}/>
                      </div>
                      <div className= "column2">
                     <img src={uman2} alt="Logo" width={"35%"} height={"auto"}/>
                      </div>
                      </div>
                     <br />
                      <div className="smalltext">Uman is an Ecuadorian artist and creator of the World of Umans. 
                     She studied design at Parsons School of Design in New York City and has created multiple 
                     collections on Ethereum and Fantom. She has received accolates including 2021 Artist of the
                      Year and Collection of the Year at the Fantom Developer Conference was recognized at NFT 
                      NYC in 2021 as a "Best NFT Artist" nominee and "Best NFT Emerging Artist", having 
                      her piece, “I am Uman”, displayed in Times Square. Her collections are among the most 
                      highest-volume collections to date on the Fantom blockchain. 
                      <br />
                      <br />
                      <div>OfficialNFTees had the pleasure of collaborating with Uman on an 11-piece sub-collection of the original Royal 
                      Tees collection, which featured the Uman Jacket, a hand-painted physical NFTee replica 
                      painted on a Yves Saint Laurent jean jacket. See her website below for links to all of her 
                      outstanding collections.</div>
                        </div>
                        <br />
                        <a href="https://www.worldofumans.com/home" target="_blank" rel="noreferrer">
                        <button className= "button2">View Uman Website</button></a>
                    </>
                  );
             
             
              return (
                    <Modal
                      isOpen={UmanModalOpen}
                      onClose={() => (setUmanModalOpen(false),setPartnersModalOpen(true))}
                      title={title}
                      content={content}
                    />
                     )
                   }
                 }
                 const TOAModal = () => {
                   if (TOAModalOpen === true){
                   const title = <div>Teens On Acid<br/></div>
                   const content = (
                     <>
                     <br />
                     <div className= "row">
                       <div className= "column2">
                     <img src={TOA2} alt="Logo" width={"35%"} height={"auto"}/>
                     </div>
                     <div className= "column2">
                     <img src={TOA1} alt="Logo" width={"35%"} height={"auto"}/>
                      </div>
                      <div className= "column2">
                     <img src={TOA3} alt="Logo" width={"35%"} height={"auto"}/>
                      </div>
                      </div>
                      <br />
                       <div className="smalltext">Joshua Thorsen, also known as Teens On Acid (TOA), 
                     is an Australian neo-pop artist best known in the NFT space for his edgy and energetic 
                     Astro-kids and Acid cats collections. TOA has created several popular collections both 
                     on-and-off chain, on a variety of mediums including clothing, skateboards, digital canvas 
                     and more. His collections are among the most popular in the FTM and AVAX NFT communities, 
                     and he has also launched successful collections on Ethereum with substantial secondary 
                     market volume. TOA is very engaging with his community and can be seen attending weekly 
                     auctions in the Tombheads Auctionhouse discord, where he is among the highest-selling 
                     artists to date. 
                     <br /><br /><div className="smalltext">TEES has been working on a collaboration with TOA to bring TOA 
                     collectors favorite NFTs to life in physical apparel. Release date to be announced.</div>
                         </div>
                         <br />
                         <a href="https://teensonacid.portfoliobox.net/" target="_blank" rel="noreferrer">
                        <button className= "button2">View TOA Website</button></a>
                     </>
                   );
              
              
               return (
                     <Modal
                       isOpen={TOAModalOpen}
                       onClose={() => (setTOAModalOpen(false),setPartnersModalOpen(true))}
                       title={title}
                       content={content}
                     />
                      )
                    }
                  }
                  const ClokkModal = () => {
                   if (ClokkModalOpen === true){
                   const title = <div>Clokkworky<br/></div>
                   const content = (
                     <>
                     <br />
                     <div className= "row">
                       <div className= "column2">
                     <img src={clokk2} alt="Logo" width={"45%"} height={"auto"}/>
                     </div>
                     <div className= "column2">
                     <img src={clokk} alt="Logo" width={"60%"} height={"auto"}/>
                      </div>
                      <div className= "column2">
                     <img src={clokk3} alt="Logo" width={"45%"} height={"auto"}/>
                      </div>
                      </div>
                      <br />
                       <div className="smalltext">Clokkworky is an artist who describes his style as, “Psychedelic Cubism - Abstract Art - 
                     Psychedelic Art & Pepedelic Cryptocubism.” His unique ability, skill and appeal to crypto 
                     space have resulted in some of the highest single-piece sales on Fantom blockchain NFT 
                     auctions to date. 
                     <br />
                     <br />
                     <div className="smalltext">OfficialNFTees has partnered with Clokkworky on vibrant, three piece 
                     collection that brought his artistic genius to the forefront of the Royal Tees collection. 
                     Clokkworky has also created a three-piece collection of “Crypto Deities” named by the 
                     cross-section of OfficialNFTees/Clokkworky community-members. Limited release of these 
                     designs are planned with a TBD drop date.</div>
                         </div>
                         <br />
                         <a href="https://linktr.ee/clokkworky" target="_blank" rel="noreferrer">
                        <button className= "button2">View Clokkworky Website</button></a>
                     </>
                   );
              
              
               return (
                     <Modal
                       isOpen={ClokkModalOpen}
                       onClose={() => (setClokkModalOpen(false),setPartnersModalOpen(true))}
                       title={title}
                       content={content}
                     />
                      )
                    }
                  }
                  const PotluckModal = () => {
                   if (PotluckModalOpen === true){
                   const title = <div>Potluck Labs<br/></div>
                   const content = (
                     <>
                      <div>
                      <img src={potluck} alt="Logo" width={"80%"} height={"auto"}/>
                      </div>
                      <br />
                       <div className="smalltext">Potluck Labs is an NFT incubator that has partnered with tens of popular artists to launch 
                     successful NFT collections across seven different blockchains (including, ETH, AVAX, MATIC and 
                     HBAR), and continues to expand its reach for its more-than 6,500 unique holders. 
                     </div>
                     <div className="smalltext">Unlike NFT launchpads that focus on the launch phase of a collection, as an incubator, Potluck Labs covers 
                     everything from the marketing effort, to setting up and launching smart contracts, to assisting 
                     with direction and roadmap. Due to this approach and strong team vision, Potluck Labs continues 
                     to fill a gap in the NFT space, which has brought value to artists and collectors alike. 
                     </div>
                     <br />
                     <div className="smalltext">OfficialNFTees has partnered with Potluck labs for Hedera Holiday sweaters, with additional 
                     cross-chain collaborations planned in 2023.</div>
                         <br />
                         <a href="https://www.potluck-labs.com/" target="_blank" rel="noreferrer">
                        <button className= "button2">View Potluck Website</button></a>
                     </>
                   );
              
              
               return (
                     <Modal
                       isOpen={PotluckModalOpen}
                       onClose={() => (setPotluckModalOpen(false),setPartnersModalOpen(true))}
                       title={title}
                       content={content}
                     />
                      )
                    }
                  }
                  const TombModal = () => {
                   if (TombModalOpen === true){
                   const title = <div>Tombheads<br/></div>
                   const content = (
                     <>
                      <div>
                      <img src={tomb} alt="Logo" width={"10%"} height={"auto"}/>
                      <img src={tomb2} alt="Logo" width={"30%"} height={"auto"}/>
                      <img src={tomb} alt="Logo" width={"10%"} height={"auto"}/>
                      </div>
                       <div className="smalltext">The Tombheads Auctionhouse is a multi-chain, Discord-based Auctionhouse that has attracted a 
                     collaborative community of top-quality creators from across artistic disciplines, as well as a 
                     vibrant community of NFT collectors. The Tombheads team has also pioneered several aspects of 
                     the Fantom NFT scene, offering the first and most successful free mint to date, Degenerabbits. 
                     This collection included a full roadmap and is among the highest-volume collections on Fantom 
                     to date. </div>
                     <div className="smalltext">Tombheads has also partnered with many community artists to host mint events, which 
                     have been among the most successful mints on Fantom, and Tombheads Awards, which was a full 
                     award-show style event with web 3 flare, as community members nominated and voted for their 
                     favorite contributors across several awards categories.</div>
                     <div className="smalltext">OfficialNFTees partnered with Tombheads 
                     on a three-piece release within the Royal Tees collection, which are among the highest primary 
                     sale pieces to and were sold in the Tombheads Auctionhouse. OfficialNFTees has participated in 
                     a number of Tombheads Auctionhouse Regulars auctions throughout 2021 and 2022.
                         </div>
                         <br />
                         <a href="https://ftmwatch.com/tombheads-auction-house/" target="_blank" rel="noreferrer">
                        <button className= "button2">View Tombheads Website</button></a>
                     </>
                   );
              
              
               return (
                     <Modal
                       isOpen={TombModalOpen}
                       onClose={() => (setTombModalOpen(false),setPartnersModalOpen(true))}
                       title={title}
                       content={content}
                     />
                      )
                    }
                  }
                  const PunkModal = () => {
                   if (PunkModalOpen === true){
                   const title = <div>Fantom Punks<br/></div>
                   const content = (
                     <>
                     <div className= "row">
                       <div className= "column2">
                     <img src={punk} alt="Logo" width={"60%"} height={"auto"}/>
                     </div>
                     <div className= "column2">
                     <img src={punk2} alt="Logo" width={"45%"} height={"auto"}/>
                      </div>
                      <div className= "column2">
                     <img src={babypunk} alt="Logo" width={"60%"} height={"auto"}/>
                      </div>
                      </div>
                       <div className="smalltext">Sarge is one of the pioneers of the Fantom NFT scene, whose 100-piece collection of 
                     FantomPunks has been among the most popular on Fantom since launching in early 2021. 
                     Since then, Sarge has contributed much to the community through free mints, airdrops to 
                     existing FantomPunks Holders, and his “SWOL” art collaborations with NFT Incubator Potluck 
                     Labs. </div>
                     <br />
                     <div className="smalltext">FantomPunks, in combination with Gotham Apes, also hosted a first-of-its-kind in-person 
                     NFT Auction in Austin, TX during SXSW in March of 2021.</div>
                     <br />
                     <div className="smalltext"> TEES and FantomPunks made one of the 
                     first multi-NFT collaborations on the Fantom blockchain as part of the FantomPunks and Royal 
                     Tees collections
                         </div>
                         <br />
                         <a href="https://twitter.com/FantomPunks" target="_blank" rel="noreferrer">
                        <button className= "button2">View FantomPunks Twitter</button></a>
                     </>
                   );
              
              
               return (
                     <Modal
                       isOpen={PunkModalOpen}
                       onClose={() => (setPunkModalOpen(false),setPartnersModalOpen(true))}
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
        <a href="" onClick={requestAccount}><img src={connect} alt=""/></a>
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
        {ChainsModal()}
        {RoyalTeesModal()}
        {CommuniTeesModal()}
        {LifeStyleModal()}
        {UmanModal()}
        {TOAModal()}
        {ClokkModal()}
        {PotluckModal()}
        {TombModal()}
        {PunkModal()}
        {MintModal()}
        {TeamModal()}
                  <div className="mobile-button-container">
              <div className="mobile-button" role="button" onClick={() => setMenuModalOpen(true)}>About</div>
              <div className="mobile-button" role="button" onClick={() => setTeesModalOpen(true)}>Videos</div>
              <div className="mobile-button" role="button" onClick={() => setCollectionModalOpen(true)}>Collections</div>
              <div className="mobile-button" role="button" onClick={() => setUltraModalOpen(true)}>Ultra</div>
              <div className="mobile-button" role="button" onClick={() => setMintModalOpen(true)}>Now Minting</div>
              <div className="mobile-button" role="button" onClick={() => setPartnersModalOpen(true)}>Partners</div>
              <div className="mobile-button" role="button" onClick={() => setTeamModalOpen(true)}>Team</div>
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
