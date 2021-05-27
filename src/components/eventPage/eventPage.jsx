import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AllocatedSeatPicker from '../allocatedSeatPicker/allocatedSeatPicker';

const EventPage = ({ updateCart }) => {
    const { id } = useParams();
    const [eventInfo, setEventInfo] = useState({});

    useEffect(() => {
        fetch(`https://technical-test-api.azurewebsites.net/events/${id}`)
        .then(response => response.json())
        .then(json => setEventInfo(json));
    }, [id]);

    return (
        <>
            <img src={eventInfo.imageUrl} alt='event' />
            <h1>{eventInfo.name}</h1>
            <div>
            {eventInfo.type === 'allocated' ? <AllocatedSeatPicker seatIDs={eventInfo.allocatedSeatIds} updateCart={updateCart} /> : <></>}
            </div>
        </>
    );
};

export default EventPage;