import React, { useState, useEffect, useRef } from "react";

export const Counter: React.FC<{}> = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount((prevState) => prevState + 1);
  };
  const decrement = (): void => {
    setCount((prevState) => prevState - 1);
  };

  const renderTimes = useRef<number>(0);

  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  const ref = useRef<HTMLInputElement>(null!);

  const foucusInput = () => {
    ref.current.focus();
  };

  return (
    <div>
      <div>count : {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times</div>
      <input ref={ref} type="text" />
      <button onClick={foucusInput}>Click me!</button>
    </div>
  );
};
