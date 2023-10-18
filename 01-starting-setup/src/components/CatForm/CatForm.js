import './CatForm.css'
import React, { useState } from 'react';

function CatForm() {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const nameChangedHandler = (event) => {
        setName(event.target.value);
        console.log(name);
    };

    const dateChangedHandler = (event) => {
        setDate(event.target.value);
        console.log(date);
    };

    const descriptionChangedHandler = (event) => {
        setDescription(event.target.value);
        console.log(description);
    };

    return (
        <form>
            <div className="new-cat__controls">
                <div className="new-cat__control">
                    <label>Name</label>
                    <input type="text" onChange={nameChangedHandler} />
                </div>
                <div className="new-cat__control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangedHandler} />
                </div>
                <div className="new-cat__control">
                    <label>Description</label>
                    <input type="text" onChange={descriptionChangedHandler} />
                </div>
            </div>

            <div className="new-cat__actions">
                <button type="submit">Add Cat</button>
            </div>
        </form>
    );
}

export default CatForm;