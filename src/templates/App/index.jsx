import { useRef } from 'react';
import { forwardRef } from 'react';
import { useLayoutEffect } from 'react';
import { useState } from 'react';

export const Home = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const divRef = useRef();

  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 600);
    divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
  };

  return (
    <>
      <button onClick={() => handleClick()}>Count {counted.slice(-1)}</button>
      <DisplayCounted counted={counted} ref={divRef}></DisplayCounted>
    </>
  );
};

export const DisplayCounted = forwardRef(function DisplayCounted(
  { counted },
  ref,
) {
  return (
    <div
      ref={ref}
      style={{
        height: '100px',
        width: '100px',
        overflowY: 'scroll',
      }}
    >
      {counted.map((c) => {
        return <p key={`c-${c}`}>{c}</p>;
      })}
    </div>
  );
});
