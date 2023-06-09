import './App.css';
import React, { useContext, useState } from 'react';

const globalState = {
  title: 'O titulo de contexto',
  body: 'O Body do contexto',
  counter: 0,
};

const GlobalContext = React.createContext();

// eslint-disable-next-line
const Div = ({ children }) => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = theContext;
  return (
    <p
      onClick={() => setContextState({ ...contextState, counter: counter + 1 })}
    >
      {body}
    </p>
  );
};

function App() {
  const [contextState, setContextState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
      <P />
    </GlobalContext.Provider>
  );
}

export default App;
