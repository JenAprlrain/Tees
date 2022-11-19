import "../App.css";
import sweater from "../data/HbarSweater.gif" 

export default function Rare() {
  return (
    <div className="min-content ultra-exclusive">
      <div>
      <a href="./App">
      <button className="closebutton">x Close</button>
      </a>
      </div>
      <div className="box">
        <div className="sub-box"> 
        <img src={sweater} alt="Hbar Sweater" width={"100%"} height={"100%"}/></div>
        <p className="box-details">
          Hedera Christmas Sweater is a exclusive collection done in collaboration with the Hedera
          foundation, Nfteir, and Potluck Protocol. Physical sweaters can be claimed only once by an
          owner of the NFT. Please check to see if your NFT has been claimed for a physical before
          buying on secondary markets. ...add link to NFTiers here...
        </p>
        <p className="box-title">Hedera Christmas Sweater</p>
      </div>
      </div>
  );
}
