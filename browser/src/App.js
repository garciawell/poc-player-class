
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <div className="container">
              <h1>Poc Player Embed</h1>
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <iframe
              title="conference"
              src="https://garcia.whereby.com/8dd2d6ef-1fe9-43bb-9b62-af4b509505b5?embed&chat=on&screenshare=on&lang=pt&people=on&background=on&breakout"
              allow="camera; microphone; fullscreen; speaker; display-capture"
            ></iframe>
          </div>
        </header>
    </div>
  );
}

export default App;
