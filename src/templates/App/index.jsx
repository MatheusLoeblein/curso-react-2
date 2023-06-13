import { useState, useEffect } from 'react';
import { useFetch } from './use-fetch';

export const Home = () => {
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts/' + postId,
    {
      headers: { ABC: 1 },
    },
  );

  useEffect(() => {
    console.log('ID Post', postId);
  }, [postId]);

  if (loading) {
    return <p>loading...</p>;
  }

  const handleClick = (id) => {
    setPostId(id);
  };
  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (
          result.map((p) => (
            <div key={`post-${p.id}`} onClick={() => handleClick(p.id)}>
              <p>{p.title}</p>
            </div>
          ))
        ) : (
          <div onClick={() => handleClick('')}>
            <p>{result.title}</p>
          </div>
        )}
      </div>
    );
  }

  return <h1>Oi</h1>;
};
