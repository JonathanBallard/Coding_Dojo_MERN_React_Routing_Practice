import React from 'react';


const HelloComponent = props => {


    return (
        <div className='HelloComponent'>
            <h1>Welcome To Hello!</h1>
            <h3>{props.word}</h3>
            {props.children}
        </div>
    )


}

export default HelloComponent;