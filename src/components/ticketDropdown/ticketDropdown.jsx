import React, { useEffect, useRef, useState } from 'react'

const TicketDropdown = ({ name, updateFunc, remainder }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const select = useRef();

  useEffect(() => {
    for (let i = 0; i < 11; i++) {
      select.current[i] = new Option(i, i);
    }
  }, []);

  useEffect(() => {
    if (parseInt(select.current.value) + remainder < 10) {
      for (let i = 10; i > parseInt(select.current.value) + remainder; i--) {
        select.current[i] = null;
      }
    }
  }, [remainder]);

  const handleUpdate = () => {
    let valueDiff = parseInt(select.current.value) - currentValue;
    setCurrentValue(parseInt(select.current.value));
    updateFunc(valueDiff);
  }

  return (
    <label>
      {name}:
      <select ref={select} onChange={handleUpdate} />
    </label>
  )
}

export default TicketDropdown
