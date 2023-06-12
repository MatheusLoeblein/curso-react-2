import { useContext, useEffect, useRef } from 'react';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import {
  incrementConter,
  decrementConter,
} from '../../contexts/ExampleProvider/action';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { CounterContext } from '../../contexts/ExampleProvider/context';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <div>
      <button onClick={() => incrementConter(counterDispatch)}>
        Counter: {counterState.counter}+
      </button>
      <button onClick={() => decrementConter(counterDispatch)}>
        Counter: {counterState.counter}-
      </button>
      <h1>POSTS</h1>
      {postsState.loading && (
        <p>
          <strong>Carregando posts...</strong>
        </p>
      )}

      {postsState.posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};
