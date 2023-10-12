import { useState } from "react";
import React from 'react'
import Star from './star'

interface ICount {
    count: number;
    key: string;
}

function Stars(props: ICount) {
    const { count } = props;
    let [stars, setStars] = useState(count);

    if(stars < 0) setStars(stars = 0);
    if(stars > 5) setStars(stars = 5);

    let arr = [];
    for (let i = 0; i < stars; i++) {
        arr.push(Star());
    }

    return (
        <div>
            <div className="starBtn">
                <button onClick={() => setStars(stars += 1)}>добавить звезду</button>
                <button onClick={() => setStars(stars -= 1)}>убрать звезду</button>
            </div>
            <ul className="card-body-stars u-clearfix">
                { arr.map(star => star) }
            </ul>
        </div>
    )
}

export default Stars;
