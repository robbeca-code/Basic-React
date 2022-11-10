import React, {useState} from 'react';


const Counter = () => {
  const [num, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(num + 1);
  }

  const onDecrease = () => {
    setNumber(num - 1);
  }

  return (
    <div>
      <button type='button' onClick={onIncrease}>+1</button>
      <button type='button' onClick={onDecrease}>-1</button>
      <p>{num}</p>
    </div>
  )
};

export default Counter;