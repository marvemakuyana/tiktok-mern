import React from "react";
import './App.css';
import Video from "./Video";

function App() {
  return (
    <div className="App">
      <Video 
        url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        channel='Munya.denhere.4'
        description='Best series'
        song='Game of THrones'
        likes={111}
        messages={222}
        shares={333}/>
  
    </div>
  );
}

export default App;
