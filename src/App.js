import React, { useCallback, useState, useMemo } from 'react';
import './App.css';
import P from 'prop-types';

const Button = ({ incrementButton }) => {
  console.log('Filho Renderizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
};
Button.propTypes = {
  incrementButton: P.func,
};
function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((counter) => counter + num);
  }, []);

  console.log('Pai Renderizou');

  const btn = useMemo(() => {
    return <Button incrementButton={incrementCounter} />;
  }, [incrementCounter]);

  return (
    <div className="App">
      <p>Teste 1</p>
      <h1> C1: {counter} </h1>
      {btn}
    </div>
  );
}

export default App;
