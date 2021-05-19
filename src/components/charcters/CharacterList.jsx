import React from 'react'
import CharacterCard from '../charcters/CharacterCard'

export default function CharacterList({ characters }) {
    return (
        <div>
            <h2>GOT Character List</h2>
            <ul aria-label='list'>
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
