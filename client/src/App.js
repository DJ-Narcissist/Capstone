import React, { useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
      ).then(
        data => {
          setBackendData(data);
        }
      );
  }, []);

  return (
    <div>
      {(typeof backendData.DJ === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.DJ.map((DJ, i) => (
          <p key={i}>{DJ}</p>
        ))
      )}
    </div>
  );
}

export default App;
