import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const triggerCountdown = async () => {
    setIsLoading(true);
    try {
      // API call to trigger the countdown
      await axios.post('https://backend-audi.vercel.app/trigger-countdown');
      alert('Countdown started on the LED panel!');
    } catch (error) {
      console.error('Error triggering countdown:', error);
      alert('Failed to trigger countdown');
    }
    setIsLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>LED Panel Countdown</h1>
        <button onClick={triggerCountdown} disabled={isLoading}>
          {isLoading ? 'Starting...' : 'Start Countdown'}
        </button>
      </header>
    </div>
  );
}

export default App;
