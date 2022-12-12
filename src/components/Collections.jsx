import "../App.css";
import React, { useState } from "react";
import Modal from '../components/Modal/Modal';
import hat1 from "../data/hat1.png";
import hat2 from "../data/hat2.png";
import hat3 from "../data/hat3.png";
import comm1 from "../data/community-img1.png";
import comm2 from "../data/community-img2.jpg";
import comm3 from "../data/community-img3.png";
import moon from "../data/moon.gif";
import build from "../data/build.gif";
import spooky from "../data/spooky.gif";

export default function Collections() {
  const [RoyalTeesModalOpen, setRoyalTeesModalOpen] = useState(false)
  const [CommuniTeesModalOpen, setCommuniTeesModalOpen] = useState(false)
  const [LifeStyleModalOpen, setLifeStyleModalOpen] = useState(false)

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
         <a href="https://paintswap.finance/marketplace/fantom/collections/officialnftees" target="_blank" rel="noreferrer">
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
         onClose={() => setRoyalTeesModalOpen(false)}
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
          onClose={() => setCommuniTeesModalOpen(false)}
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
          onClose={() => setLifeStyleModalOpen(false)}
          title={title}
          content={content}
        />
         )
       }
     }
  return (
    <div className="min-content partners-list">
      <div>
      <a href="./App">
      <button className="closebutton">x Close</button>
      </a>
      </div>
      <br />
      {RoyalTeesModal()}
      <div className="border">
        <div className="border">
          <div className="border">
            <a href="#RoyalTees" onClick={() => setRoyalTeesModalOpen(true)}>
            <p className="uman-partner">RoyalTees Collection</p></a>
          </div>
        </div>
      </div>
      <br />
      {CommuniTeesModal()}
        <div className="border">
          <div className="border">
            <div className="border">
            <a href="#CommuniTees" onClick={() => setCommuniTeesModalOpen(true)}>
              <p className="uman-partner">CommuniTees Collection</p></a>
            </div>
        </div>
        </div>
        <br />
        {LifeStyleModal()}
        <div className="border">
          <div className="border">
            <div className="border">
            <a href="#LifeStyle" onClick={() => setLifeStyleModalOpen(true)}>
              <p className="uman-partner">Lifestyle Collection</p></a>
            </div>
          </div>
        </div>
      </div>
  );
}
