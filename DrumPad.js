import React from 'react';

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

    // "e" represents event
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


export default DrumPad;