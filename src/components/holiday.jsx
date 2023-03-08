import "../App.css";
import "./Modal/Modal.module.css"
import sweater from "../data/HbarSweater.gif";

export default function holiday() {
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
          Hedera Christmas Sweater is a exclusive collection done in collaboration with the Hedera
          foundation, Nfteir, and Potluck Protocol. Physical sweaters can be claimed only once by an
          owner of the NFT. Please check to see if your NFT has been claimed for a physical before
          buying on secondary markets.
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
