import React, { useState } from 'react';
import Greeting from 'Greeting';

function App() {
  const [name, setName] = useState('John');

  return (
    <div>
      <h1>Welcome to React!</h1>
      <Greeting name={name} />
      <button onClick={() => setName('Jane')}>Change Name</button>
    </div>
  );
}

export default App;



