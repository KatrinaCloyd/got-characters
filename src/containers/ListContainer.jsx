import React, { useState, useEffect } from 'react'
import CharacterList from '../components/charcters/CharacterList';
import Loading from '../components/Loading';
import { getGOTcharactersList } from '../services/apiUtil';

export default function ListContainer() {

    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        getGOTcharactersList()
            .then(setCharacters)
            .finally(() => (setLoading(false)))
    }, [])


    if (loading) return <Loading />;

    return (<CharacterList characters={characters} />)
}
