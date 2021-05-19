import React, { useState, useEffect } from 'react'
import CharacterList from '../components/charcters/CharacterList';
import { getGOTcharactersList } from '../services/apiUtil';

export default function ListContainer() {

    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        getGOTcharactersList()
            .then(setCharacters)
            .finally(() => (setLoading(false)))
    }, [])


    if (loading) return <h2>Loading... </h2>;

    return (
        <>
            <h2>
                List Container
            </h2>
            <CharacterList characters={characters} />
        </>
    )
}
