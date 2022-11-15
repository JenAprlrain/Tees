import "../App.css";
import uman from "../data/uman-removebg-preview.png";
import clokkyWorky from "../data/clokkyworky-removebg-preview.png";
import partner1 from "../data/tees-partner.jpeg";
import partner2 from "../data/tees-partners.jpeg";
export default function Partners() {
  return (
    <div className="min-content partners-list">
      <div>
      <a href="./App">
      <button className="closebutton">x Close</button>
      </a>
      </div>
      <br />
      <div className="border">
        <div className="border">
          <div className="border">
            <p className="uman-partner">uman</p>
          </div>
        </div>
      </div>
      <div className="partner-list-1">
        <img src={uman} />
      </div>
      <div className="partner-list-2">
        <img className="tees-partner" src={partner1} />
        <img className="tees-partner" src={partner2} />
        <img className="crokky" src={clokkyWorky} />
      </div>
      <div className="bottom-btns">
        <div className="border">
          <div className="border">
            <div className="border">
              <p className="tees-partner-btn">teens on acid</p>
            </div>
          </div>
        </div>
        <div className="border">
          <div className="border">
            <div className="border">
              <p className="tees-partner-btn">clokkyWorky</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
