import React from 'react';
import CharacterCard from '../charcters/CharacterCard';
import PropTypes from 'prop-types';

export default function CharacterList({ characters }) {
    return (
        <div>
            <h2>Class of 2019!!</h2>
            <ul aria-label='list' >
                {characters.map((char) => {
                    return (
                        <li key={char.id}>
                            <CharacterCard
                                id={char.id}
                                firstName={char.firstName}
                                lastName={char.lastName}
                                image={char.image}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })).isRequired,
}