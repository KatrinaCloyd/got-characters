import React from 'react'
import CharacterDetail from '../components/charcters/CharacterDetail';
import Loading from '../components/Loading';
import { useSingleCharacter } from '../hooks/singleCharacter';


export default function DetailContainer() {

    const { loading, character } = useSingleCharacter();

    if (loading) return <Loading />;

    return (<CharacterDetail character={character} />);
}
