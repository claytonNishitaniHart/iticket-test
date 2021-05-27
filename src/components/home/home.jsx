import React, { useState, useEffect } from 'react';
import Event from '../event/event';
import styles from './home.module.css'

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://technical-test-api.azurewebsites.net/events')
        .then(response => response.json())
        .then(json => {
            setEvents(json);
        });
    }, []);

    return (
        <div className={styles.eventGrid}>
            {events.map((item, index) => {
            return (
                <Event key={index} id={item.id} name={item.name} imageUrl={item.imageUrl} type={item.type} />
            );
            })}
        </div>
    );
};

export default Home;