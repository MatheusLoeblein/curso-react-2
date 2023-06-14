import {
  useRef,
  useState,
  useLayoutEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import P from 'prop-types';

export const Home = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const divRef = useRef();

  useLayoutEffect(() => {
    const now = Date.now();
    // while (Date.now() < now + 600);
    divRef.current.divRef.scrollTop = divRef.current.divRef.scrollHeight;
  });

  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
    divRef.current.handleClick();
  };

  return (
    <>
      <button onClick={handleClick}>Count {counted.slice(-1)}</button>
      <DisplayCounted counted={counted} ref={divRef}></DisplayCounted>
    </>
  );
};

export const DisplayCounted = forwardRef(function DisplayCounted(
  { counted },
  ref,
) {
  const [rand, setRand] = useState('0.24');
  const divRef = useRef();

  const handleClick = () => {
    setRand(Math.random().toFixed(2));
  };

  useImperativeHandle(ref, () => ({
    handleClick,
    divRef: divRef.current,
  }));
  return (
    <div
      ref={divRef}
      style={{
        padding: '20px',
        height: '200px',
        width: '200px',
        overflowY: 'scroll',
      }}
    >
      {counted.map((c) => {
        return (
          <p onClick={handleClick} key={`c-${c}`}>
            {c} +++ {rand}
          </p>
        );
      })}
    </div>
  );
});

DisplayCounted.propTypes = {
  counted: P.number,
};
