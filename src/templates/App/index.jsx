import { useState } from 'react';
import './styles.css';

/* eslint-disable */
const UseFetch = (url, options) => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    result[result, loading]


};

function App() {
  const [result, loading] = UseFetch('https://jsonplaceholder.typicode.com/posts');
  return <h1>Oi</h1>;
}

export default App;
