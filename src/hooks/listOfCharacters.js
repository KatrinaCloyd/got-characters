import { useState, useEffect } from 'react'
import { getGOTcharactersList } from '../services/apiUtil';

export const useListOfCharacters = () => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        getGOTcharactersList()
            .then(setCharacters)
            .finally(() => (setLoading(false)))
    }, [])

    return { loading, characters }
}