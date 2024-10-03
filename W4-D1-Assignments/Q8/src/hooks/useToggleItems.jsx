import { useState } from 'react';

function useToggleItems(initialValue, initialPosition = 0) {
  const [currentIndex, setCurrentIndex] = useState(initialPosition);

  // Toggle function to switch between items in a circular manner
  const toggleState = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % initialValue.length);
  };

  // Return the current item and the toggle function
  return [initialValue[currentIndex], toggleState];
}

export default useToggleItems;
