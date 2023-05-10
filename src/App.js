import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [signs, setSigns] = useState([]);
  const [selectedSign, setSelectedSign] = useState(null);

  useEffect(() => {
    fetch('http://sandipbgt.com/theastrologer/api/sunsigns/')
      .then((response) => response.json())
      .then(setSigns);
  }, []);

  return (
    <div className="App">
      <h1>Astro App</h1>
      <h2>Select a sign</h2>
      {selectedSign}
      {signs.map((sign) => (
        <button
          className="sign"
          key={sign}
          onClick={() => setSelectedSign(sign)}
        >
          {sign}
        </button>
      ))}
    </div>
  );
}

export default App;
