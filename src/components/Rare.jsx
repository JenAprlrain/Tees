import "../App.css";
import "./Modal/Modal.module.css"
import sweater from "../data/HbarSweater.gif";

export default function Rare() {
  return (
    <div className="min-content ultra-exclusive">
      <div>
      <a href="./">
      <button className="closebutton">x Close</button>
      </a>
      </div>
      <div className="box">
      <p className="box-title">Hedera Christmas Sweater</p>
        <div className="sub-box"> 
        <img src={sweater} alt="Hbar Sweater" width={"100%"} /></div>
        <p className="box-details">
          Hedera Holiday Sweater is an exclusive collection done in collaboration with Nfteir and Potluck Protocol. Physical sweaters can be claimed only once by an
          owner of the NFT.
          <br />
          <br />
          <a href="https://nftier.tech/mint/hedera-holiday" target="_blank" rel="noreferrer">
         <button className= "button2">Mint Page</button>
         </a>
        </p>
      </div>
      </div>
  );
}
