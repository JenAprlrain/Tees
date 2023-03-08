import "../App.css";
import Modal from '../components/Modal/Modal';
import React, { useState } from "react";
import uman from "../data/uman.png";
import uman1 from "../data/uman1.png";
import uman2 from "../data/uman2.png";
import TOA1 from "../data/TOA1.png";
import TOA2 from "../data/TOA2.png";
import TOA3 from "../data/TOA3.png";
import clokk from "../data/clokk.png";
import clokk2 from "../data/clokk2.png";
import clokk3 from "../data/clokk3.png";
import potluck from "../data/potluck.png";
import tomb from "../data/tomb.jpg";
import tomb2 from "../data/tomb.jpeg";
import punk from "../data/punks.png";
import punk2 from "../data/punk2.png";
import babypunk from "../data/babypunk.png";

export default function Partners() {
const [UmanModalOpen, setUmanModalOpen] = useState(false)
const [TOAModalOpen, setTOAModalOpen] = useState(false)
const [ClokkModalOpen, setClokkModalOpen] = useState(false)
const [PotluckModalOpen, setPotluckModalOpen] = useState(false)
const [TombModalOpen, setTombModalOpen] = useState(false)
const [PunkModalOpen, setPunkModalOpen] = useState(false)

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
         <div>Uman is an Ecuadorian artist and creator of the World of Umans. 
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
         onClose={() => setUmanModalOpen(false)}
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
          <div>Joshua Thorsen, also known as Teens On Acid (TOA), 
        is an Australian neo-pop artist best known in the NFT space for his edgy and energetic 
        Astro-kids and Acid cats collections. TOA has created several popular collections both 
        on-and-off chain, on a variety of mediums including clothing, skateboards, digital canvas 
        and more. His collections are among the most popular in the FTM and AVAX NFT communities, 
        and he has also launched successful collections on Ethereum with substantial secondary 
        market volume. TOA is very engaging with his community and can be seen attending weekly 
        auctions in the Tombheads Auctionhouse discord, where he is among the highest-selling 
        artists to date. 
        <br /><br /><div>TEES has been working on a collaboration with TOA to bring TOA 
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
          onClose={() => setTOAModalOpen(false)}
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
          <div>Clokkworky is an artist who describes his style as, “Psychedelic Cubism - Abstract Art - 
        Psychedelic Art & Pepedelic Cryptocubism.” His unique ability, skill and appeal to crypto 
        space have resulted in some of the highest single-piece sales on Fantom blockchain NFT 
        auctions to date. 
        <br />
        <br />
        <div>OfficialNFTees has partnered with Clokkworky on vibrant, three piece 
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
          onClose={() => setClokkModalOpen(false)}
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
          <div>Potluck Labs is an NFT incubator that has partnered with tens of popular artists to launch 
        successful NFT collections across seven different blockchains (including, ETH, AVAX, MATIC and 
        HBAR), and continues to expand its reach for its more-than 6,500 unique holders. 
        </div>
        <div>Unlike NFT launchpads that focus on the launch phase of a collection, as an incubator, Potluck Labs covers 
        everything from the marketing effort, to setting up and launching smart contracts, to assisting 
        with direction and roadmap. Due to this approach and strong team vision, Potluck Labs continues 
        to fill a gap in the NFT space, which has brought value to artists and collectors alike. 
        </div>
        <br />
        <div>OfficialNFTees has partnered with Potluck labs for Hedera Holiday sweaters, with additional 
        cross-chain collaborations planned in 2023.</div>
            <br />
            <a href="https://www.potluck-labs.com/" target="_blank" rel="noreferrer">
           <button className= "button2">View Potluck Website</button></a>
        </>
      );
 
 
  return (
        <Modal
          isOpen={PotluckModalOpen}
          onClose={() => setPotluckModalOpen(false)}
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
          <div>The Tombheads Auctionhouse is a multi-chain, Discord-based Auctionhouse that has attracted a 
        collaborative community of top-quality creators from across artistic disciplines, as well as a 
        vibrant community of NFT collectors. The Tombheads team has also pioneered several aspects of 
        the Fantom NFT scene, offering the first and most successful free mint to date, Degenerabbits. 
        This collection included a full roadmap and is among the highest-volume collections on Fantom 
        to date. </div>
        <div>Tombheads has also partnered with many community artists to host mint events, which 
        have been among the most successful mints on Fantom, and Tombheads Awards, which was a full 
        award-show style event with web 3 flare, as community members nominated and voted for their 
        favorite contributors across several awards categories.</div>
        <div>OfficialNFTees partnered with Tombheads 
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
          onClose={() => setTombModalOpen(false)}
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
          <div>Sarge is one of the pioneers of the Fantom NFT scene, whose 100-piece collection of 
        FantomPunks has been among the most popular on Fantom since launching in early 2021. 
        Since then, Sarge has contributed much to the community through free mints, airdrops to 
        existing FantomPunks Holders, and his “SWOL” art collaborations with NFT Incubator Potluck 
        Labs. </div>
        <br />
        <div>FantomPunks, in combination with Gotham Apes, also hosted a first-of-its-kind in-person 
        NFT Auction in Austin, TX during SXSW in March of 2021.</div>
        <br />
        <div> TEES and FantomPunks made one of the 
        first multi-NFT collaborations on the Fantom blockchain as part of the FantomPunks and Royal 
        Tees collections.
            </div>
            <br />
            <a href="https://twitter.com/FantomPunks" target="_blank" rel="noreferrer">
           <button className= "button2">View FantomPunks Twitter</button></a>
        </>
      );
 
 
  return (
        <Modal
          isOpen={PunkModalOpen}
          onClose={() => setPunkModalOpen(false)}
          title={title}
          content={content}
        />
         )
       }
     }
  return (
    
    <div className="min-content partners-list">
      <div>
      <a href="./">
      <button className="closebutton">x Close</button>
      </a>
      </div>
     <br />
     {UmanModal()}
      <div className="border">
        <div className="border">
          <div className="border">
          <a href="#Uman" onClick={() => setUmanModalOpen(true)}>
            <p className="uman-partner">uman</p></a>
          </div>
        </div>
      </div>
      <br />
      {TOAModal()}
        <div className="border">
          <div className="border">
            <div className="border">
            <a href="#TOA" onClick={() => setTOAModalOpen(true)}>
              <p className="uman-partner">teens on acid</p></a>
            </div>
        </div>
        </div>
        <br />
        {ClokkModal()}
        <div className="border">
          <div className="border">
            <div className="border">
            <a href="#Clokkworky" onClick={() => setClokkModalOpen(true)}>
              <p className="uman-partner">clokkWorky</p></a>
            </div>
          </div>
        </div>
        <br />
        {PotluckModal()}
        <div className="border">
          <div className="border">
            <div className="border">
            <a href="#Potluck" onClick={() => setPotluckModalOpen(true)}>
              <p className="uman-partner">Potluck Labs</p></a>
            </div>
          </div>
        </div>
        <br />
        {TombModal()}
        <div className="border">
          <div className="border">
            <div className="border">
            <a href="#Tombheads" onClick={() => setTombModalOpen(true)}>
              <p className="uman-partner">Tombheads AH</p></a>
            </div>
          </div>
        </div>
        <br />
        {PunkModal()}
        <div className="border">
          <div className="border">
            <div className="border">
            <a href="#FantomPunks" onClick={() => setPunkModalOpen(true)}>
              <p className="uman-partner">FantomPunks</p></a>
            </div>
          </div>
        </div>
      </div>
  );
}
