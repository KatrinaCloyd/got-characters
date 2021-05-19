import React from 'react';
import style from './app/app.css';

export default function Loading() {
    return (
        <div className={style.loadingImg}>
            <img src={"https://i.pinimg.com/originals/07/52/cd/0752cd6d7fc1e6b94384d171ea00231b.gif"} alt={'Loading...'} />
        </div>
    )
}
