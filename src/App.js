import { useEffect, useState, useMemo, useRef } from 'react';
import './App.css';
import P from 'prop-types';

const Post = ({ post, onClick }) => {
  return (
    <div className="post">
      <h2 style={{ fontSize: '14px' }} onClick={() => onClick(post.title)}>
        {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  onClick: P.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const contador = useRef(0);

  console.log('Pai renderizou');
  //ComponentDidMount
  useEffect(() => {
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  useEffect(() => {
    contador.current++;
  });
  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <h1>Render Pai {contador.current}X</h1>
      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>

      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} onClick={handleClick} />;
          })
        );
      }, [posts])}

      {posts.length <= 0 && <h1>Ainda não existem posts</h1>}
    </div>
  );
}

export default App;
