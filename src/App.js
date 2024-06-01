import Homepage from './Pages/Homepage';
import { useState } from 'react';
import './App.css';

function App() {

  const [isNightMode, setIsNightMode] = useState(false);
  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div className="App">
      <div className={isNightMode ? 'night-mode' : ''}>
        <button className='nightmode' id='nightmode-btn' htmlFor="toggle" onClick={toggleNightMode}>Night Mode</button>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
