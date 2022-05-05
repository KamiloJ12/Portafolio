import React from 'react';


const TeamItem = ({id, nombre, imagen, width}) => {
    return (
        <div className='card'>
            <img className='my-4' src={imagen} alt={imagen} width={width}/>
            <p> <b>{ nombre }</b> </p>
            <p> Desarrollado Full-Stack</p>
        </div>
    );
}

export default TeamItem;