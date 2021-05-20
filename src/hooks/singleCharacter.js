import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getGOTcharacter } from "../services/apiUtil";

export const useSingleCharacter = () => {
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        getGOTcharacter(id)
            .then(setCharacter)
            .finally(() => { setLoading(false) })
    }, [])

    return { loading, character };
}