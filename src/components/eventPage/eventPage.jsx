import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CallApi from '../../util/apiCalls';
import AllocatedSeatPicker from '../allocatedSeatPicker/allocatedSeatPicker';
import GeneralAdmissionAreas from '../generalAdmissionAreas/generalAdmissionAreas';

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
                {eventInfo.type === 'allocated' ? <AllocatedSeatPicker seatIds={eventInfo.allocatedSeatIds} updateCart={updateCart} /> : <GeneralAdmissionAreas areaIds={eventInfo.gaAreaIds} bookingLimit={eventInfo.bookingLimit} updateCart={updateCart} />}
            </div>
        </>
    );
};

export default EventPage;