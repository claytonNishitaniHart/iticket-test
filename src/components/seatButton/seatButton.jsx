import React, { useEffect, useState } from 'react';
import styles from './seatButton.module.css';

const SeatButton = ({ id, selectedId, updateSelectedId, seatsInCart }) => {
    const [seatStatus, setSeatStatus] = useState(0);

    const seatStatuses = [styles.available, styles.pending, styles.booked, styles.sold];

    useEffect(() => {
        fetch(`https://technical-test-api.azurewebsites.net/allocated-seats/${id}`)
        .then(response => response.json())
        .then(json => setSeatStatus(json.status));
    }, [id]);

    useEffect(() => {
        seatsInCart.includes(id) ? setSeatStatus(2) : setSeatStatus(seatStatus);
    }, [seatsInCart]);

    const handleClick = () => {
        updateSelectedId(selectedId === id ? 0 : id);
    }

    return (
        <button onClick={seatStatus < 2 ? handleClick : null} className={`${styles.button} ${selectedId === id ? seatStatuses[1] : seatStatuses[seatStatus]}`} />
    );
};

export default SeatButton;