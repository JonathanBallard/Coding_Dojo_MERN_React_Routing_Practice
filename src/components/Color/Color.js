import React from 'react';


const ColorComponent = props => {


    const style = {
        color:props.color1,
        backgroundColor:props.color2,
    }

    return (
        <div className='ColorComponent'>
            <h1>Welcome To Color!</h1>
            <h3 style={style}>{props.word}</h3>
            {props.children}
        </div>
    )


}

export default ColorComponent;