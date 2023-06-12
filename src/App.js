import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'O titulo de contexto',
  body: 'O Body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda':
      return { ...state, title: action.payload };
    case 'inverter': {
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title } = state;
  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-BR'),
          })
        }
      >
        Muda
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>inverter</button>
    </div>
  );
}

export default App;
