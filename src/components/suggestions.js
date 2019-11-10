import React, { Component } from 'react';
const Suggestions = ({suggestion}) => {
    return ( <div className='container'>
        <h6>name:</h6>
        <p>{suggestion.name}</p>
        <h6>phone number:</h6>
        <p>{suggestion.phone}</p>
        <h6>email:</h6>
        <p>{suggestion.email}</p>
        <h6>descrition:</h6>
        <p>{suggestion.description}</p>
    </div> );
}
 
export default Suggestions;