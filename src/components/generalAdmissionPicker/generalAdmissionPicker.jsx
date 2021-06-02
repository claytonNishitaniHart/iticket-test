import React, { useState } from 'react'
import TicketDropdown from '../ticketDropdown/ticketDropdown';

const GeneralAdmissionPicker = ({ eventName, areaInfo, bookingLimit, updateCart }) => {
  const [ticketNum, setTicketNum] = useState(0);

  const updateTicketNum = (newNum) => {
    setTicketNum(ticketNum + newNum);
  }

  return (
    <div>
      <p>{areaInfo.name}</p>
      <p>{ticketNum} / {bookingLimit}</p>
      <form>
        {areaInfo.priceIds.map((id, index) => {
          return (
            <TicketDropdown key={index} id={id} eventName={eventName} updateFunc={updateTicketNum} remainder={bookingLimit - ticketNum} updateCart={updateCart} />
          );
        })}
      </form>
    </div>
  )
}

export default GeneralAdmissionPicker
