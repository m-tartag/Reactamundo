import React from 'react';

const person = (props) => {
  return <div>
    {/* <p>Name: Matt</p>
    <p>Age: {Math.floor(Math.random() * 40)}</p> */}
    <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
    <p>{props.children}</p>
  </div>

};


export default person;