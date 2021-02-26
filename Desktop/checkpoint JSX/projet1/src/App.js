import "./App.css";
import "./style.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          border: solid,
          border: "1px",
          color: "black",
          maxWidth: "100vw",
        }}
      >
        <h1 className="title red">Your name here</h1>

        <br />

        <img src={"imageInSrc.jpg"} />

        <br />

        <img src={"/imageInPublic.jpg"} />
      </div>

      <video src={myVideo.mp4} type="video/mp4" width="320" height="240" />
    </div>
  );
}
export default "App";
