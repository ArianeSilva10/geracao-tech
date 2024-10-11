import React, { useEffect, useState } from 'react';
import Input from './components/Input';


const App = () => {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('useEffect chamado para count');
  }, [count]
);

  return (
    <div>
      <p>Contador 1: {count}</p>
      <button onClick={() => setCount(count+1)}>Incrementar Contador 1</button>

      <p>Contador 2: {count2}</p>
      <button onClick={() => setCount2(count2+1)}>Incrementar Contador 2</button>
    </div>

  );
};
export default App;