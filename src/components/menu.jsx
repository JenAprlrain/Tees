import "../App.css";
import React, { useState } from "react";
import Modal from '../components/Modal/Modal';
import AuthVision from "../data/AuthenticVision.jpg";
import QR from "../data/QR.png";
import Fantom from "../data/fantomlogo.png";
import Hbar from "../data/hederaLogo.jpg";
import Avax from "../data/avax.png";
import polygon from "../data/polygon.png";
import shimmer from "../data/shimmer.png";
import video from "../data/Tees.mov";

export default function Menu() {

  const [WhatIsTeesModalOpen, setWhatIsTeesModalOpen] = useState(false)
  const [IsTechnologyModalOpen, setIsTechnologyModalOpen] = useState(false)
  const [ChainsModalOpen, setChainsModalOpen] = useState(false)

  const WhatIsTeesModal = () => {
     if (WhatIsTeesModalOpen === true){
     const title = <div>What is TEES?<br/></div>
     const content = (
       <>
        <div>
        <video src={video} width="700" height="400" controls></video>
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
         onClose={() => setWhatIsTeesModalOpen(false)}
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
          <div>Base Web 3 Technology – From the beginning, OfficialNFTees has utilized QR codes to
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
            NFTee in the Web3 Wardrobe ™.
            <br />
            <br />
            </div>
        </>
      );


  return (
        <Modal
          isOpen={IsTechnologyModalOpen}
          onClose={() => setIsTechnologyModalOpen(false)}
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
          onClose={() => setChainsModalOpen(false)}
          title={title}
          content={content}
        />
         )
       }
     }
  return (
    <div className="min-content partners-list">
    {WhatIsTeesModal()}
      <div>
      <a href="./">
      <button className="closebutton">x Close</button>
      </a>
      </div>
      <br />
      <div className="border">
        <div className="border">
          <div className="border">
          <a href="#whatistees" onClick={() => setWhatIsTeesModalOpen(true)}>
            <p className="uman-partner">What is Tees?</p>
            </a>
          </div>
        </div>
        </div>
        <br />
        <br />
        {TechnologyModal()}
        <div className="border">
        <div className="border">
          <div className="border">
          <a href="#Technology" onClick={() => setIsTechnologyModalOpen(true)}>
            <p className="uman-partner">Technology</p>
            </a>
          </div>
        </div>
        </div>
        <br />
        <br />
        {ChainsModal()}
        <div className="border">
        <div className="border">
          <div className="border">
          <a href="#Chains" onClick={() => setChainsModalOpen(true)}>
            <p className="uman-partner">Chains</p>
            </a>
          </div>
        </div>
        </div>
    </div>
  );
}
