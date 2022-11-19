import "../App.css";
import "./team.css";
import Jmoney from "../data/Jmoney.png";
import z14 from "../data/z14.png";
import Jerrod from "../data/Jerrod.png";
import Jen from "../data/Jen.png"

export default function Team() {
  return (
    
    <div className="teams">
        <div className="teams__fashionHead-section">
        <div>
      <a href="./App">
      <button className="closebutton">x Close</button>
      </a>
      </div>
    <div className="row">
     <div class="column2">
      <a href="https://twitter.com/0xJMONEY">
      <img src={Jmoney} alt="jmoney" width={"100%"}/></a>
      <h1 text-align={"center"}>jmoney</h1>
      <h3 text-align={"center"}>(Team Lead)</h3>
    </div>
    <div class="column2">
      <a href="https://twitter.com/DeFiiGhost">
      <img src={z14} alt="z14" width={"100%"}/></a>
      <h1 text-align={"center"}>Z14</h1>
      <h3 text-align={"center"}>(Metaverse / Strategy Lead)</h3>
    </div>          
    <div class="column2">
      <a href="https://twitter.com/Jerr0d_">
      <img src={Jerrod} alt="z14" width={"100%"}/></a>
      <h1 text-align={"center"}>J3rr0d</h1>
      <h3 text-align={"center"}>(Marketing Lead)</h3>
    </div>
    <div class="column2">
      <a href="https://twitter.com/jen_aprilrain">
      <img src={Jen} alt="z14" width={"100%"}/></a>
      <h1 text-align={"center"}>jen_aprilrain</h1>
      <h3 text-align={"center"}>(Development and Community Management Lead)</h3>
    </div>             
  </div>
    </div>
    </div>
)
}
