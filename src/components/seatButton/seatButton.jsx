import React, { useEffect, useState } from 'react';
import CallApi from '../../util/apiCalls';
import styles from './seatButton.module.css';

const SeatButton = ({ id, selectedId, updateSelectedId, seatsInCart }) => {
    const [seatStatus, setSeatStatus] = useState(0);

    const seatStatuses = [styles.available, styles.pending, styles.booked, styles.sold];

    useEffect(() => {
        const initialiseSeatStatus = async () => {
            const seat = await CallApi(`allocated-seats/${id}`);
            setSeatStatus(seat.status);
        }
        initialiseSeatStatus();
    }, [id]);

    useEffect(() => {
        seatsInCart.includes(id) ? setSeatStatus(2) : setSeatStatus(seatStatus);
    }, [seatsInCart, id, seatStatus]);

    const handleClick = () => {
        updateSelectedId(selectedId === id ? 0 : id);
    }

    return (
        <button onClick={seatStatus < 2 ? handleClick : null} className={`${styles.button} ${selectedId === id ? seatStatuses[1] : seatStatuses[seatStatus]}`} />
    );
};

export default SeatButton;