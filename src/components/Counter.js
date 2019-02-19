import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Click Counter: ${count}`;
  });

  return (
    <Div>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Increase</Button>
      <Button onClick={() => setCount(count - 1)}>Decrease</Button>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 1.3rem;
`;

export default Counter;
