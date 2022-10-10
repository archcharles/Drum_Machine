const drumBank = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

// Define parent component App (to host & render drumpads)
const App = () => {
  return (
    <div className="bg-secondary bg-opacity-75 min-vh-100 text-center text-white">
      <h2>Drum Machine</h2>
      <div id="display" className="bg-secondary text-center">
        {/* Generate (& return) array of HTML DrumPad elements from drumBank elements */}
        {drumBank.map((audioClip) => (
          <DrumPad key={audioClip.id} audioClip={audioClip} />
        ))}
      </div>
    </div>
  );
}

// Define child component, DrumPad (designs DrumPad & play sound onClick)
const DrumPad = (props) => {
  return (
    <div className="drum-pad btn btn-info p-4 m-3 text-white">{props.keyTrigger} 
      <audio className="clip" id={"props.keyTrigger"} src={"props.url"}/>
    </div>
  );
}


// Render App component to html container
const container = document.getElementById('drum-machine');
const root = ReactDOM.createRoot(container);
root.render(<App />);

// ReactDOM.render(<App/>, document.getElementById('drum-machine'));
