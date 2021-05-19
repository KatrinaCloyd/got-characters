import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterCard({ id, firstName, lastName, image }) {
    return (
        <Link to={`/${id}`} key={id - firstName} >
            <img src={image} alt={id + firstName} />
            <h2>{firstName + ' ' + lastName}</h2>
        </Link>
    )
}
