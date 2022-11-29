import "../App.css";
import React from "react"

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
          <a href="#whatistees">
            <p className="uman-partner">What is Tees?</p>
            </a>
          </div>
        </div>
        </div>
        <br />
        <br />
        <div className="border">
        <div className="border">
          <div className="border">
          <a href="#Technology">
            <p className="uman-partner">Technology</p>
            </a>
          </div>
        </div>
        </div>
        <br />
        <br />
        <div className="border">
        <div className="border">
          <div className="border">
          <a href="#Chains">
            <p className="uman-partner">Chains</p>
            </a>
          </div>
        </div>
        </div>
    </div>
  );
}
