
import './App.css';
import io from "socket.io-client";
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const socket = io('https://18.231.179.64:3016', { 
  transports: ['websocket', 'polling'],
});
 

function App() {
  const [type, setType] = useState("")
  const {search} = useLocation();
  const { id: room } = useParams();
  const query = new URLSearchParams(search);
  const paramField = query.get('admin');
  const isAdmin = paramField === "on";

  useEffect(() => {
    socket.on('connection', (socket) => {
      console.log('a user connected');
    });

    socket.emit('create', room);

    socket.on(room, (data) => { 
      console.log(data);
    });

    socket.on("activities", (data) => {
      setType(data)
    });

    socket.on('disconnect', () => {
      // alert("OPAAA")
    });
  }, [room])


  const handleChange = (type) => {
    console.log("TYPE", type)
    socket.emit("activities", { value: type, room})
  }

  return (
    <div className="App">
        <header className="App-header">
          <div className="container">
              <h1>HYDRA</h1>


              <div className="player">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <iframe
                title="conference"
                src="https://lucasf3000.whereby.com/314d6bac-8aa3-48e9-b1d6-ac5625a6ce42?embed&chat=on&screenshare=on&lang=pt&people=on&background=on&breakout"
                allow="camera; microphone; fullscreen; speaker; display-capture"
              ></iframe>
              </div>
              <h2>Atividades: {type}</h2>
              {isAdmin &&
                <div>
                  <select onChange={(e) => handleChange(e.target.value)}>
                    <option value="video">Video</option>
                    <option value="audio">Audio</option>
                  </select>
                </div>
                }

              {type === "video" &&
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/dqR5k50qszY?controls=0&autoplay=1&mute=1" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; 
                autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>  
              }
              {type === "audio" &&
              <audio
                preload="none"
                autoPlay
                controls
                // ref={ref}
                // onEnded={() => setIsPlaying(false)}
                // onLoadedData={() => {
                //   if (exercise) {
                //     setTime(ref.current.duration.toFixed(2));
                //   }
                // }}
              >
                <source 
                src="https://online.wiseup.com/storage/media/answers-feedback-audio/SFO_PT_1.4_01.mp3" 
                type="audio/mp3"
                >         
                </source>
              </audio>
              }
          </div>

        </header>
    </div>
  );
}

export default App;
