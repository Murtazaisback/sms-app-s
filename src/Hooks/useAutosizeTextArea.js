import { useState, useRef, useLayoutEffect } from 'react';

const useAutosizeTextArea = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const textareaRef = useRef(null);

  useLayoutEffect(() => {
    const textarea = textareaRef.current;
    const adjustHeight = () => {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    };
    textarea.addEventListener('input', adjustHeight);
    adjustHeight(); // Adjust height initially
    return () => {
      textarea.removeEventListener('input', adjustHeight);
    };
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return [value, handleChange, textareaRef];
};

export default useAutosizeTextArea;
