import React from 'react';
import './Card.css';

const Card = ({title, description}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{description}</p>
        </section>
    );
};

export default Card;