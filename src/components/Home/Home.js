import React from 'react';


const HomeComponent = props => {


    return (
        <div className='HomeComponent'>
            <h1>Welcome Home!</h1>
            {props.children}
        </div>
    )


}

export default HomeComponent;