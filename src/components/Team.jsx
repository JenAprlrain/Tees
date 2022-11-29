import "../App.css";
import "./team.css";
import Jmoney from "../data/James.png";
import z14 from "../data/Zan.png";
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
      <br />
      <a href="https://twitter.com/0xJMONEY" target="_blank" rel="noreferrer">
      <img src={Jmoney} alt="jmoney" width={"100%"}/></a>
      <div class="textcenter"><h1 text-align={"center"}>jmoney</h1>
      <h3 text-align={"center"}>(Team Lead)</h3></div>
    </div>
    <div class="column2">
      <br />
      <a href="https://twitter.com/DeFiiGhost" target="_blank" rel="noreferrer">
      <img src={z14} alt="z14" width={"100%"}/></a>
      <div class="textcenter"><h1 text-align={"center"}>Z14</h1>
      <h3 text-align={"center"}>(Metaverse / Strategy Lead)</h3></div>
    </div>          
    <div class="column2">
      <br />
      <a href="https://twitter.com/Jerr0d_" target="_blank" rel="noreferrer">
      <img src={Jerrod} alt="Jerrod" width={"100%"}/></a>
      <div class="textcenter"><h1 text-align={"center"}>J3rr0d</h1>
      <h3 text-align={"center"}>(Marketing Lead)</h3></div>
    </div>
    <div class="column2">
      <br />
      <a href="https://twitter.com/jen_aprilrain" target="_blank" rel="noreferrer">
      <img src={Jen} alt="Jen" width={"100%"}/></a>
      <div class="textcenter"><h1 text-align={"center"}>jen_aprilrain</h1>
      <h3 text-align={"center"}>(Dev and Community Management Lead)</h3></div>
    </div>             
  </div>
    </div>
    </div>

)
}
