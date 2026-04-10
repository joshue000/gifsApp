import { useState } from 'react'

const useCounter = () => {

  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1)
  };

  const handleSubtract = () => {
    setCounter((prevState) => {
      if (prevState === 0) return 0;
      return prevState - 1;
    });
  };

  const handleReset = () => {
    setCounter(0);
  };

  return {
    counter,
    handleAdd,
    handleSubtract,
    handleReset
  }
}

export default useCounter
