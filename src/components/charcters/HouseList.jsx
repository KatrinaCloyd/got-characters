import React from 'react';
import CharacterCard from '../charcters/CharacterCard';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import style from '../app/app.css';
import Loading from '../Loading';
import { useListOfCharacters } from '../../hooks/listOfCharacters';

export default function HouseList() {
    const { name } = useParams();
    const { loading, characters } = useListOfCharacters();

    if (loading) return <Loading />;

    //NEED TO ACCOUNT FOR SPELLING MISTAKES IN LAST NAMES IN API
    if (characters && name === 'Lannister') {
        const chList = characters.filter(function (e) {
            return e.house === 'Lannister' || e.house === `House Lannister` || e.house === `House Lanister`;
        });

        return (
            <div>
                <h2 className={style.classOf}>HOUSE {name}</h2>
                <ul aria-label='list' >
                    {chList.map((char) => {
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

    if (characters) {
        const chList = characters.filter(function (e) {
            //NEED TO ACCOUNT FOR SPELLING MISTAKES IN LAST NAMES
            return e.house === name || e.house === `House ${name}`;
        });
        console.log(chList);
        return (
            <div>
                <h2 className={style.classOf}>HOUSE {name}</h2>
                <ul aria-label='list' >
                    {chList.map((char) => {
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
}
