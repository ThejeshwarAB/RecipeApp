import React from 'react';

function Item(props) {

   async function changeCss(e) {
    if (e.target.style.color == 'red') {
      // alert("You chose:"+props.value);
      await props.setSafe(props.value);
      e.target.style.color = 'black';
      
    }
    else {
    // alert(props.value);
    await props.setSafe(""); 
    e.target.style.color = 'red'; 
    }
  }
  return (
    <div className={props.css} value={props.value} onClick={(e) => { props.hello(props.value); changeCss(e) }}>
      <h3>{props.value}</h3>
    </div>
  );
}

export default Item;