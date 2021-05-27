import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './event.module.css';

const Event = ({id, name, imageUrl, type}) => {
    let history = useHistory();

    const handleClick = () => {
        history.push(`/event/${id}`);
    };

    return (
        <div onClick={handleClick} className={styles.container}>
            <img src={imageUrl} alt='event' />
            <h1>{name}</h1>
        </div>
    );
};

export default Event;