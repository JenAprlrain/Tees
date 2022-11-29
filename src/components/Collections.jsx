import "../App.css";

export default function Collections() {
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
            <a href="#RoyalTees">
            <p className="uman-partner">RoyalTees Collection</p></a>
          </div>
        </div>
      </div>
      <br />
        <div className="border">
          <div className="border">
            <div className="border">
            <a href="#CommuniTees">
              <p className="uman-partner">CommuniTees Collection</p></a>
            </div>
        </div>
        </div>
        <br />
        <div className="border">
          <div className="border">
            <div className="border">
            <a href="#LifeStyle">
              <p className="uman-partner">Lifestyle Collection</p></a>
            </div>
          </div>
        </div>
      </div>
  );
}
