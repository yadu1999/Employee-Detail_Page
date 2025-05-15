
import { useState, useCallback } from 'react';

export const useHistory = (initialState) => {
  const [states, setStates] = useState([initialState]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const setState = useCallback((newState) => {
    const newStates = states.slice(0, currentIndex + 1);
    newStates.push(
      typeof newState === 'function' ? newState(newStates[newStates.length - 1]) : newState
    );
    setStates(newStates);
    setCurrentIndex(newStates.length - 1);
  }, [states, currentIndex]);

  const undo = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex]);

  const redo = useCallback(() => {
    if (currentIndex < states.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, states]);

  const canUndo = currentIndex > 0;
  const canRedo = currentIndex < states.length - 1;

  return {
    state: states[currentIndex],
    setState,
    undo,
    redo,
    canUndo,
    canRedo,
    history: states,
    historyIndex: currentIndex
  };
};
