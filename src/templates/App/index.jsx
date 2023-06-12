import './styles.css';

import { PostsProvider } from '../../contexts/PostsProvider';
import { CounterProvider } from '../../contexts/ExampleProvider';
import { Posts } from '../../components/Posts';

function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}

export default App;
