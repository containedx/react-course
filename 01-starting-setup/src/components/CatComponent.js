import './CatComponent.css';

function Cat(props) {

    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });

    return (
        <div className="cat-item">
            <div className="cat-item__description">
                <div>
                    <div>{month}</div>
                    <div><h2>{day}</h2></div>
                    <div>{year}</div>
                </div>

                <div className="cat-item__title">{props.catName}</div>
                <h2>lorem ipsum  hd icnd hudhs huh sin ament gin dan banana</h2>
            </div>
        </div>
    );
}

export default Cat;