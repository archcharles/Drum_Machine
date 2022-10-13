import ReactDOM from 'react-dom/client';

import App from './App';

// Render App component to html container
// const container = document.getElementById('drum-machine');
// const root = ReactDOM.createRoot(container);
// root.render(<App />);

const root = ReactDOM.createRoot(document.getElementById('drum-machine'));
root.render(<App />);

// ReactDOM.render(<App/>, document.getElementById('drum-machine'));