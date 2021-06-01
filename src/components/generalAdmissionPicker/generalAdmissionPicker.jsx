import React, { useEffect, useState } from 'react'
import TicketDropdown from '../ticketDropdown/ticketDropdown';

const GeneralAdmissionPicker = () => {
  const ticketLimit = 15;
  const [ticketNum, setTicketNum] = useState(0);

  const updateTicketNum = (newNum) => {
    setTicketNum(ticketNum + newNum);
  }

  return (
    <div>
      <p>{ticketNum} / {ticketLimit}</p>
      <form>
        <TicketDropdown name='ticket 1' updateFunc={updateTicketNum} remainder={ticketLimit - ticketNum} />
        <TicketDropdown name='ticket 2' updateFunc={updateTicketNum} remainder={ticketLimit - ticketNum} />
        <TicketDropdown name='ticket 2' updateFunc={updateTicketNum} remainder={ticketLimit - ticketNum} />
      </form>
    </div>
  )
}

export default GeneralAdmissionPicker
