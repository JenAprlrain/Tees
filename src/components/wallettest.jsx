import "../App.css";
import CommunityABI from "../components/contract ABIs/CommuniTeesABI.json";

const ethers = require("ethers");
const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/fantom');
const CommunityABI = {CommunityABI}
const CommunityAddress = '0x633763D9174d6B772676920b2309b39eE3A92a8a'
const CommunityContract = new ethers.Contract(CommunityAddress, CommunityABI, provider)

const main = async () => {
    const Communityname = await CommunityContract.name();
    console.log(Communityname);

      
      <div className="min-content ultra-exclusive">
         <div>
        <a href="./App">
        <button className="closebutton">x Close</button>
        </a>
        </div>
        <div className="box">
        <p className="box-title">{main}</p>
          <p className="box-details">
         Test
          </p>
        </div>
      </div>
}