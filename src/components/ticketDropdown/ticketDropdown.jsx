import React, { useEffect, useRef, useState } from 'react'

const TicketDropdown = ({ name, updateFunc, remainder }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const select = useRef();


  useEffect(() => {
    select.current.length = 0;
    for (let i = 0; i < Math.min(11, currentValue + remainder + 1); i++) {
      select.current[i] = new Option(i, i);
    }
    select.current.value = currentValue;
  }, [remainder, currentValue]);

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
