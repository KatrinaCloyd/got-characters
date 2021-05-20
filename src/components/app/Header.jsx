import React from 'react'
import { Link } from 'react-router-dom'
import style from './app.css'

export default function Header() {
    return (
        <>
            <h1>
                G.O.T. Characters?
            </h1>
            <div className={style.linksList}>
                <Link to={'/'}>home</Link>
                <Link to={'/name/Stark'}>house stark</Link>
                <Link to={'/name/Lanister'}>house lannister</Link>
                <Link to={'/name/Baratheon'}>house baratheon</Link>
            </div>
        </>
    )
}
