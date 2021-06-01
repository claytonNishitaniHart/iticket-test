import React, { useEffect, useState } from 'react';
import CallApi from '../../util/apiCalls';
import styles from './ticketButton.module.css';

const TicketButton = ({ id, seatId, updateCart, seatsInCart, updateSeatsInCart, updateSelectedId }) => {
    const [ticketInfo, setTicketInfo] = useState({});

    useEffect(() => {
        const initialiseTicketInfo = async () => {
            const ticket = await CallApi(`prices/${id}`);
            setTicketInfo(ticket);
        }
        initialiseTicketInfo();
    }, [id]);

    const handleClick = () => {
        updateCart(ticketInfo);
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