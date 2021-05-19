import React from 'react';
import style from '../app/app.css';
import PropTypes from 'prop-types';

export default function CharacterDetail({ character }) {
    return (
        <div className={style.detailPg}>
            <div className={style.detail}>
                <h2 className={style.detailName}>{character.fullName}</h2>
                <h3 className={style.detailTitle}>{character.title}</h3>
                <img src={character.imageUrl} alt={'character image'} className={style.detailImg} />
                <h3>{character.family}</h3>
            </div>
        </div>
    )
}

CharacterDetail.propTypes = {
    character: PropTypes.shape({
        id: PropTypes.number.isRequired,
        fullName: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        family: PropTypes.string.isRequired,
    }).isRequired,
}
