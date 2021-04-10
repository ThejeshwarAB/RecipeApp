import React from 'react';

function Card(props) {

    async function changeCss(e) {
        if (e.target.style.color == 'red') {
            await props.setSafe(props.value);
            e.target.style.color = 'black';
        }
        else {
        await props.setSafe(""); 
        e.target.style.color = 'red'; 
    }
    }
    return (
        <div className='CardCss' >
            <h3>{props.recipe.toUpperCase()}</h3>
            <a href={props.utube}>YouTube</a>
            <br />
            <hr />
            <h5>INGREDIENTS</h5>
            <br />
            <h5>{props.ingred.map((ing) => (<p>{ing}</p>))}</h5>
            <hr />
            <p className="text-justify">{props.method}</p>
        </div>
    );
}

export default Card;