import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountdownControl = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [countdown, setCountdown] = useState(null);
//   const [socket, setSocket] = useState(null);

//   useEffect(() => {
//     // Initialize WebSocket connection
//     const socket = new WebSocket('ws://192.168.0.24:3000'); // Replace with your backend IP
//     setSocket(socket);

//     socket.onopen = () => {
//       console.log('WebSocket connection opened');
//     };

//     socket.onmessage = (event) => {
//       const message = event.data;
//       if (message === 'start') {
//         startCountdown();
//       }
//     };

//     socket.onclose = () => {
//       console.log('WebSocket connection closed. Reconnecting...');
//       setTimeout(() => {
//         setSocket(new WebSocket('ws://192.168.0.24:4000')); // Reconnect
//       }, 3000); // Reconnect after 3 seconds
//     };

//     socket.onerror = (error) => {
//       console.error('WebSocket error:', error);
//     };

//     return () => {
//       socket.close();
//     };
//   }, []);

//   const startCountdown = () => {
//     let timeLeft = 10;
//     setCountdown(timeLeft);

//     const countdownInterval = setInterval(() => {
//       timeLeft--;
//       setCountdown(timeLeft);

//       if (timeLeft <= 0) {
//         clearInterval(countdownInterval);
//         setCountdown('Countdown Finished!');
//       }
//     }, 1000);
//   };

  const triggerCountdown = async () => {
    setIsLoading(true);
    try {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send('start');
      } else {
        alert('WebSocket connection is not open. Please wait...');
      }
    } catch (error) {
      console.error('Error triggering countdown:', error);
      alert('Failed to trigger countdown');
    }
    setIsLoading(false);
  };

  return (
    <div className="CountdownControl">
      <h1>LED Panel Countdown</h1>
      <button onClick={triggerCountdown} disabled={isLoading}>
        {isLoading ? 'Starting...' : 'Start Countdown'}
      </button>
      <div id="countdown" style={{ fontSize: '40px', marginTop: '20px' }}>
        {countdown !== null ? countdown : 'Waiting to start...'}
    
        <video id="video" height={400} width={600} >
            <source src="./trial.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default CountdownControl;
