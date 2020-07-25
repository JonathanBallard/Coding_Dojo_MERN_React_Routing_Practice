import React from 'react';


const NumberComponent = props => {


    return (
        <div className='NumberComponent'>
            <h1>Welcome To Number!</h1>
            <h3>{props.num}</h3>
            {props.children}
        </div>
    )


}

export default NumberComponent;