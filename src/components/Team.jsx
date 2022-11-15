import "../App.css";
import "./team.css";
import Jmoney from "../data/Jmoney.png";
import z14 from "../data/z14.jpeg";
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
            <div className="teams__fashionHeadImg-section">
                <a className="teams__fashionHead-img"href="https://twitter.com/0xJMONEY">
                <img src={Jmoney} alt="" />
                    <p className="teams__text">jmoney</p>
                    <p>Team Lead</p>
                </a>

                <a className="teams__fashionHead-img"href="https://twitter.com/DeFiiGhost">
                <img src={z14} alt="" />
                    <p>Z14</p>
                    <p>Metaverse / Strategy Lead</p>
                </a>


                <a className="teams__fashionHead-img"href="https://twitter.com/Jerr0d_">
                <img src={Jerrod} alt="" />
                    <p>J3rr0d</p>
                    <p>Marketing Lead</p>
                </a>

                <a className="teams__fashionHead-img"href="https://twitter.com/jen_aprilrain">
                <img src={Jen} alt="" />
                    <p>jen_aprilrain</p>
                    <p>Development and Community Management Lead</p>
                </a>
        </div>
    </div>
    </div>
)
}
