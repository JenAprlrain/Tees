import "../App.css";
import jacket from "../data/umanjacket.jpg"

export default function Ultra() {
  return (
    
    <div className="min-content ultra-exclusive">
       <div>
      <a href="./App">
      <button className="closebutton">x Close</button>
      </a>
      </div>
      <div className="box">
        <div className="sub-box">
       <img src={jacket} alt="jacket" width={"100%"} height={"100%"}/></div>
        <p className="box-details">
          Uman Jacket was created for blah blah blah...
        </p>
        <p className="box-title">Uman Jacket</p>
      </div>
    </div>
  );
}
