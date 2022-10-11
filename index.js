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
    <div className="bg-secondary bg-opacity-75 min-vh-100 text-center">
      <h2>Drum Machine</h2>
      <div id="display" className="bg-secondary text-center">Inner text of #display element is HERE. It should be replace with drumBank-id string when a .drum-pad is triggered
        {/* For each drumBank object, create a drumPad element & pass-in the drumBank object */}
        {/* Each child in a list should have a unique "key" prop */}
        {drumBank.map((props) => (
          <DrumPad props={props} key={props.keyCode} id={props.id} />
        ))}
      </div>
    </div>
  );
}

// Define child component, DrumPad (designs DrumPad & plays sound onClick)
// Use object destructuring lest it will just be props. Lookup \"Pass an Array as Props 4.19"
const DrumPad = ({props}) => {

  // Add event listener to play sound at keypress event
  // Use React.useEffect method to add/enable lifecycle methods to functional component. Courtesy: Landon Schlangen
  React.useEffect(() => {
    document.addEventListener("keydown", handlyKeyPress);
    return () => {
      document.removeEventListener("keydown", handlyKeyPress);
    }
  }, []);

  // use "e" to represent event
  const handlyKeyPress = (e) => {
    if (e.keyCode === props.keyCode) {
      playSound();
    }
  }

  // .drum-pad onClick event handler (playSound)
  const playSound = () => {
    const drumSound = document.getElementById(props.keyTrigger);
    drumSound.play();
  }

  return (
    <div className="drum-pad btn btn-info p-4 m-3" id={props.id} onClick={playSound}>
      <h3>{props.keyTrigger}</h3>
      <audio className="clip" src={props.url} id={props.keyTrigger} />
    </div>
  );
}

// Render App component to html container
const container = document.getElementById('drum-machine');
const root = ReactDOM.createRoot(container);
root.render(<App />);

// ReactDOM.render(<App/>, document.getElementById('drum-machine'));
