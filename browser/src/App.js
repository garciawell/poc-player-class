
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <div className="container">
              <h1>HYDRA</h1>
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <iframe
              title="conference"
              src="https://lucasf3000.whereby.com/314d6bac-8aa3-48e9-b1d6-ac5625a6ce42?embed&chat=on&screenshare=on&lang=pt&people=on&background=on&breakout"
              allow="camera; microphone; fullscreen; speaker; display-capture"
            ></iframe>
          </div>
        </header>
    </div>
  );
}

export default App;
