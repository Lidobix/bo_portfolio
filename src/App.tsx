import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('coucou');
  }, []);

  return (
    <div>
      <div>PORTFOLIO</div>
      <div>OUAICH</div>
      <div>OUAICH</div>
      <div>OUAICH</div>
    </div>
  );
}

export default App;
