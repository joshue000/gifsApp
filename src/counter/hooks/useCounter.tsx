import { useState } from 'react'

const useCounter = (initialValue = 0) => {

  const [counter, setCounter] = useState(initialValue);

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
    setCounter(initialValue);
  };

  return {
    counter,
    handleAdd,
    handleSubtract,
    handleReset
  }
}

export default useCounter
