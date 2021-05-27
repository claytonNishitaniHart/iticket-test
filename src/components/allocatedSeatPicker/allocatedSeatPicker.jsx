import React, { useEffect, useState } from 'react';
import SeatButton from '../seatButton/seatButton';
import TicketButton from '../ticketButton/ticketButton';
import styles from './allocatedSeatPicker.module.css';

const AllocatedSeatPicker = ({ seatIDs, updateCart }) => {
    const [seatsInCart, setSeatsInCart] = useState([]);
    const [selectedId, setSelectedId] = useState(0);
    const [priceIds, setPriceIds] = useState([]);

    const updateSelectedId = (id) => {
        setSelectedId(id);
    }

    const updateSeatsInCart = (id) => {
        setSeatsInCart(id);
    }

    useEffect(() => {
        fetch(`https://technical-test-api.azurewebsites.net/allocated-seats/${selectedId}`)
        .then(response => response.json())
        .then(json => setPriceIds(json.priceIds))
    }, [selectedId]);

    return (
        <div className={styles.container}>
        <div className={styles.seatGrid}>
            {seatIDs.map(seat => {
                return (
                    <SeatButton key={seat} id={seat} selectedId={selectedId} seatsInCart={seatsInCart} updateSelectedId={updateSelectedId} />
                );
            })}
        </div>
        {selectedId !== 0 ? 
        <div className={styles.prices}>
            <h1>Prices:</h1>
            {priceIds.map(id => {
                return (
                    <TicketButton key={id} id={id} seatId={selectedId} updateCart={updateCart} seatsInCart={seatsInCart} updateSeatsInCart={updateSeatsInCart} updateSelectedId={updateSelectedId} />
                );
            })}
        </div> : <></>}
        </div>
    );
};

export default AllocatedSeatPicker;