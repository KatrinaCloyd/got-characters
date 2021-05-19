import React from 'react';
import style from './app/app.css';

export default function Loading() {
    return (
        <img className={style.loadingImg} src={"https://i.pinimg.com/originals/07/52/cd/0752cd6d7fc1e6b94384d171ea00231b.gif"} alt={'Loading...'} />
    )
}
