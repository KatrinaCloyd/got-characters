import React, { useState, useEffect } from 'react'
import CharacterDetail from '../components/charcters/CharacterDetail';
import { getGOTcharacter } from '../services/apiUtil';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

export default function DetailContainer() {
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        getGOTcharacter(id)
            .then(setCharacter)
            .finally(() => { setLoading(false) })
    }, [])

    if (loading) return <Loading />;

    return (<CharacterDetail character={character} />);
}
