import React from 'react'

export default function CharacterDetail({ character }) {
    return (
        <div>
            <h2>{character.fullName}</h2>
            <h3>{character.title}</h3>
            <img src={character.imageUrl} alt={'character image'} />
            <p>{character.family}</p>
        </div>
    )
}
