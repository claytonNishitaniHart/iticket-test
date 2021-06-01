import React, { useState, useEffect } from 'react';
import CallApi from '../../util/apiCalls';
import Event from '../event/event';
import styles from './home.module.css'

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const initialiseEvents = async () => {
            const events = await CallApi(`events`);
            setEvents(events);
        }
        initialiseEvents();
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