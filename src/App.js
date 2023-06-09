import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // componentDidUpdate - executa toda vez que o component atualiza

  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // componentDidMount - executa uma vez
  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  // componentDidMount - com dependencia -  executa toda vez que dependencia mudar EX: [counter]
  useEffect(() => {
    console.log('Contador Mudou para', counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>
        C1: {counter} C2: {counter2}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+(2)</button>
    </div>
  );
}

export default App;
