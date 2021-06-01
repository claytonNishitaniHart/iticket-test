import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CallApi from '../../util/apiCalls';
import AllocatedSeatPicker from '../allocatedSeatPicker/allocatedSeatPicker';
import GeneralAdmissionPicker from '../generalAdmissionPicker/generalAdmissionPicker';

const EventPage = ({ updateCart }) => {
    const { id } = useParams();
    const [eventInfo, setEventInfo] = useState({});

    useEffect(() => {
        const initialiseEventInfo = async () => {
            const info = await CallApi(`events/${id}`);
            setEventInfo(info);
        }
        initialiseEventInfo();
    }, [id]);

    return (
        <>
            <img src={eventInfo.imageUrl} alt='event' />
            <h1>{eventInfo.name}</h1>
            <div>
                {eventInfo.type === 'allocated' ? <AllocatedSeatPicker seatIDs={eventInfo.allocatedSeatIds} updateCart={updateCart} /> : <GeneralAdmissionPicker />}
            </div>
        </>
    );
};

export default EventPage;