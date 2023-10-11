import './CatComponent.css';

function Cat() {

    const catName = "Leo";
    const randomNum = Math.random();
    const date = Date(2023, 10, 11);


    return (
        <div className="cat-item">
            <div className="cat-item__description">
                <div>{date}</div>
                <div className="cat-item__title">{catName}</div>
                <h2>leo to najslodszy kotek na swiecie  {randomNum}</h2>
            </div>
        </div>
    );
}

export default Cat;