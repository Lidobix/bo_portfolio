import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log(process.env.REACT_APP_ESSAI);
    fetch(
      `${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_SERVER_PORT}`
    )
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        console.log(data);
      })
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
