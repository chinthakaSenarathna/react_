import { useState, useEffect } from 'react';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Deeecode</h1>
      <button onClick={() => setShow(!show)}>Toggle</button>
      { show && <Child /> }
    </div>
  )
}

const Child = () => {
  useEffect(() => {
    let i = 0;
    const getInterval = setInterval(() => {
      console.log('hello - '+i);
      i++;
    },1000);

    return () => {
      clearInterval(getInterval);
      console.log('hey, stop...');
    }

  },[])

  return <h2>Child</h2>
}

export default App