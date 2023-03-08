import "../App.css";
import jacket from "../data/jacket.gif"

export default function Ultra() {
  return (
    
    <div className="min-content ultra-exclusive">
       <div>
      <a href="./">
      <button className="closebutton">x Close</button>
      </a>
      </div>
      <div className="box">
      <p className="box-title">THE UMAN JACKET</p>
      <br />
        <div className="sub-box">
       <img src={jacket} alt="jacket" width={"100%"} /></div>
       <br />
        <p className="box-details">
        This jacket was the masterpiece of the 11-NFTEE collab with acclaimed multi-chain artist, UMAN.
The canvas itself is a yves saint laurent jean jacket. Tees tags were affixed to the arm and
back of the jacket by officialnftees, and the uman pictured above was painted on by
the artist. The piece went up for auction on paintswap on OCT 31st, 2021 , and sold for 
8,500 FTM  (~$24,395 USD value at time of sale).
        </p>
      </div>
    </div>
  );
}
