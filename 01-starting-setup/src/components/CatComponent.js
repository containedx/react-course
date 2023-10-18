import React, { useState } from 'react';
import './CatComponent.css';

function Cat(props) {

    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });

    const [catName, setCatName] = useState(props.catName);

    const clickHandler = () => {
        setCatName("Leo Leo");
        console.log("click");
    };

    return (
        <div className="cat-item">
            <div className="cat-item__description">
                <div>
                    <div>{month}</div>
                    <div><h2>{day}</h2></div>
                    <div>{year}</div>
                    <button onClick={clickHandler}>Click me</button>
                </div>

                <div className="cat-item__title">{catName}</div>
                <h2>lorem ipsum  hd icnd hudhs huh sin ament gin dan banana</h2>
            </div>
        </div>
    );
}

export default Cat;