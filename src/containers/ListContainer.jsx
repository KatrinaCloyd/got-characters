import React from 'react'
import CharacterList from '../components/charcters/CharacterList';
import Loading from '../components/Loading';
import { useListOfCharacters } from '../hooks/listOfCharacters';

export default function ListContainer() {

    const { loading, characters } = useListOfCharacters();

    if (loading) return <Loading />;

    return (<CharacterList characters={characters} />);
}
