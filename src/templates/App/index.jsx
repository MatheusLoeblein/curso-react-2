import { useEffect, useState, Component } from 'react';
import PropTypes from 'prop-types';

class MyErroBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Você também pode registrar o erro em um serviço de relatórios de erro
    // console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI alternativa
      return <h1>Algo deu errado.</h1>;
    }

    return this.props.children;
  }
}

MyErroBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

const ItWillThrowError = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 3) {
      throw new Error('Que Chato');
    }
  }, [counter]);

  return (
    <div>
      <button
        style={{ fontSize: '50px' }}
        onClick={() => setCounter((s) => s + 1)}
      >
        Click to increase {counter}
      </button>
    </div>
  );
};

export const Home = () => {
  return (
    <div>
      <MyErroBoundary>
        <ItWillThrowError />
      </MyErroBoundary>
      <MyErroBoundary>
        <ItWillThrowError />
      </MyErroBoundary>
      <MyErroBoundary>
        <ItWillThrowError />
      </MyErroBoundary>
      <MyErroBoundary>
        <ItWillThrowError />
      </MyErroBoundary>
    </div>
  );
};
