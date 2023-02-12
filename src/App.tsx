import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:9090/')
      .then((r) => {})
      .catch((reason) => {
        console.error(reason);
      });
  }, []);

  return (
    <div>
      <div>PORTFOLIO</div>
      <div>OUAICH</div>
      <div>OUAICH</div>
    </div>
  );
}

export default App;
