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
  const [textValue, setTextValue] = React.useState("");

  return (
    <div className="bg-secondary bg-opacity-75 min-vh-100 text-center">
      <h2>Drum Machine</h2>
      <div id="display" className="bg-secondary text-center">
        {/* For each drumBank object, create a drumPad element & pass-in the drumBank object */}
        {/* Each child in a list should have a unique "key" prop */}
        {drumBank.map((props) => (
          <DrumPad props={props} key={props.keyCode} id={props.id} />
        ))}
        <br/>
        <p id="audioClipName" className="fw-bold text-white"></p>
      </div>
    </div>
  );
}

// Define child component, DrumPad (designs DrumPad & plays sound onClick)
// Use object destructuring lest it will just be props. Lookup \"Pass an Array as Props 4.19"
const DrumPad = ({props}) => {
  // Add active state - setActive action to DrumPad element. Use React.useState hook to define & track state
  const [active, setActive] = React.useState(false);

  // Add event listener to play sound at keypress event. Use React.useEffect hook to add lifecycle methods. Tnx: Landon Schlangen
  React.useEffect(() => {
    document.addEventListener("keydown", handlyKeyPress);
    return () => {
      document.removeEventListener("keydown", handlyKeyPress);
    }
  });

  // use "e" to represent event
  const handlyKeyPress = (e) => {
    if (e.keyCode === props.keyCode) {
      playSound();
    }
  }

  // .drum-pad onClick event handler (plays sound. update & timeout active state of .drum-pad)
  const playSound = () => {
    const drumSound = document.getElementById(props.keyTrigger);
    drumSound.play();
    // blink when .drum-pad is active
    setActive(true);
    setTimeout(() => setActive(false), 200);
    // Display string describing the associated audio clip when a .drum-pad is triggered
    document.getElementById("audioClipName").innerHTML = props.id
  }

  return (
    // RECAL: Enclose string in backticks defines Template literals. This enables string interpolation (to insert variable in a string)
    <div className={`drum-pad btn btn-info p-4 m-3 text-white ${active && 'btn-warning'}`} id={props.id} onClick={playSound}>
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
