import React, { useEffect, useState } from 'react';
import CallApi from '../../util/apiCalls';
import styles from './ticketButton.module.css';

const TicketButton = ({ id, seatId, eventName, updateCart, seatsInCart, updateSeatsInCart, updateSelectedId }) => {
    const [ticketInfo, setTicketInfo] = useState({});
    const [seatInfo, setSeatInfo] = useState({});

    useEffect(() => {
        const initialiseTicketInfo = async () => {
            const ticket = await CallApi(`prices/${id}`);
            setTicketInfo(ticket);
        }
        const initialiseSeatInfo = async () => {
            const seat = await CallApi(`allocated-seats/${seatId}`);
            setSeatInfo(seat);
        }
        initialiseTicketInfo();
        initialiseSeatInfo();
    }, [id, seatId]);

    const handleClick = () => {
        updateCart({
            eventName: eventName,
            ticketType: ticketInfo.priceName,
            price: ticketInfo.price,
            seat: `${seatInfo.seatRow}${seatInfo.seatColumn}`
        });
        updateSeatsInCart([...seatsInCart, seatId]);
        updateSelectedId(0);
    }

    return (
        <button className={styles.button} onClick={handleClick}>
            <p className={styles.name}>{ticketInfo.priceName}</p>
            <p className={styles.price}>${ticketInfo.price}</p>
        </button>
    );
};

export default TicketButton;