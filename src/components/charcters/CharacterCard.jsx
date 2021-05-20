import React from 'react';
import { Link } from 'react-router-dom';
import style from '../app/app.css';
import PropTypes from 'prop-types';

export default function CharacterCard({ id, firstName, lastName, image }) {
    return (
        <div className={style.card}>
            <Link to={`/${id}`} key={id - firstName} className={style.card}>
                <img src={image} alt={id + firstName} className={style.cardImg} />
                <h2 className={style.cardName}>{firstName}</h2>
                <h2 className={style.cardName}>{lastName === 'None' ? '' : lastName}</h2>
            </Link>
        </div>
    )
}

CharacterCard.propTypes = {
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}
