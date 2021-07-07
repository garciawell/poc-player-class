
import './App.css';
import io from "socket.io-client";
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Select from 'react-select';
import Act01 from './Components/Act01';

const socket = io('https://hydra-server-garcia.herokuapp.com', { 
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
    socket.emit("activities", { value: type, room })
  }

  const options = useMemo(() => {
    return [
    {
      value: "video",
      label: "Video"
    },
    {
      value: "audio",
      label: "Audio"
    }    
    ,{
      value: "atv1",
      label: "Atividade 01"
    }
  ]}, [])

 const defaultOptions = useMemo(() => {
   return options.find(item=> item.value === type)
 }, [options, type])


 //34625666
  return (
    <div className="App">
        <header className="App-header">
          <div className="container">
              <h1>HYDRA</h1>

        
              <div className="player">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <iframe
                title="conference"
                src={isAdmin ? "https://garciawellcloud.whereby.com/6be39d8a-1b68-422b-a057-dcc1bd180dcd?roomKey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWV0aW5nSWQiOiIzNTIyNDI5NiIsInJvb21SZWZlcmVuY2UiOnsicm9vbU5hbWUiOiIvNmJlMzlkOGEtMWI2OC00MjJiLWEwNTctZGNjMWJkMTgwZGNkIiwib3JnYW5pemF0aW9uSWQiOiIxMTkwMTMifSwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5zcnYud2hlcmVieS5jb20iLCJpYXQiOjE2MjU2OTAwMzMsInJvb21LZXlUeXBlIjoibWVldGluZ0hvc3QifQ.c-HqUZzIax8byNQSWZ2JOaQcU6pC3Q5y5BGNYfQ-Xck": "https://garciawellcloud.whereby.com/6be39d8a-1b68-422b-a057-dcc1bd180dcd?embed&chat=on&lang=pt&people=on&background=on&breakout&topToolbar=on"}
                allow="camera; microphone; fullscreen; speaker; display-capture"
              ></iframe>
              </div>
              <h2>Atividades: {type}</h2>
              {isAdmin &&
                <div className="basic-single">
                  <Select
                  value={defaultOptions}
                  options={options}
                  onChange={e  => handleChange(e.value)}
                />

                </div>
                }

              {type === "video" &&
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/dqR5k50qszY?controls=0&autoplay=1" 
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
              
               {type === "atv1" &&
                <Act01 />
              }
          </div>

        </header>
    </div>
  );
}

export default App;
