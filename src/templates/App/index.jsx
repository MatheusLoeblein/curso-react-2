import { useState, useEffect, useCallback } from 'react';

const useAsync = (asyncFunction, shouldRun) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle',
  });

  const run = useCallback(async () => {
    console.log('EFFECT', new Date().toLocaleString());
    await new Promise((r) => setTimeout(r, 2000));
    setState({
      result: null,
      error: null,
      status: 'pending',
    });

    return asyncFunction()
      .then((response) => {
        setState({
          result: response,
          error: null,
          status: 'settled',
        });
      })
      .catch((error) => {
        setState({
          result: null,
          error: error,
          status: 'error',
        });
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [run, shouldRun]);

  return [run, state.result, state.error, state.status];
};

const fetchData = async () => {
  await new Promise((r) => setTimeout(r, 2000));
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await data.json();
  return json;
};
export const Home = () => {
  const [posts, setPosts] = useState(null);
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  if (status == 'idle') {
    return <pre>Nada Exacutando</pre>;
  }
  if (status == 'pending') {
    return <pre>Loading...</pre>;
  }
  if (status == 'error') {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }
  if (status == 'settled') {
    return <pre>{JSON.stringify(result, null, 2)}</pre>;
  }
};
