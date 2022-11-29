import "../App.css";
import video from "../data/Tees.mp4"

export default function Tees() {
  return (
    <div className="min-content partners-list">
      <div>
      <a href="./App">
      <button className="closebutton">x Close</button>
      </a>
      </div>
      <div>
      <video src={video} width="750" height="500" controls></video>
      </div>
    </div>
  );
}
