import './CatComponent.css';

function Cat(props) {

    const randomNum = Math.random();


    return (
        <div className="cat-item">
            <div className="cat-item__description">
                <div>{props.date}</div>
                <div className="cat-item__title">{props.catName}</div>
                <h2>lorem ipsum  hd icnd hudhs huh sin ament gin dan banana  {randomNum}</h2>
            </div>
        </div>
    );
}

export default Cat;