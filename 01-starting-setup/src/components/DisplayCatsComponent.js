import Cat from './CatComponent';
function DisplayCats({ cats }) {

    let catList = [];

    cats.forEach(cat => {
        catList.push(<Cat date={cat.date} catName={cat.name} ></Cat>)
    });

    return (
        <div>
            <h1>CATS</h1>
            <div>{catList}</div>
        </div>
    );
}

export default DisplayCats;