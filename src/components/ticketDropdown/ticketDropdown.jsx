import React, { useEffect, useRef, useState } from 'react'
import CallApi from '../../util/apiCalls';

const TicketDropdown = ({ id, updateFunc, remainder }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [priceInfo, setPriceInfo] = useState({});
  const select = useRef();

  useEffect(() => {
    const initialisePriceInfo = async () => {
      const info = await CallApi(`prices/${id}`);
      setPriceInfo(info);
    };
    initialisePriceInfo();
  })

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
      {priceInfo.priceName} ${priceInfo.price}:
      <select ref={select} onChange={handleUpdate} />
    </label>
  )
}

export default TicketDropdown
