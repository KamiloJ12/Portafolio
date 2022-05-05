import React from 'react';

const AprendizajeSemanaItem = ({id, descripcion, link}) => {
   
    const click = () => {
        
    }

    return (
        
        <div className='card' onClick={click}>
            <h3>Semana { id }</h3>
            <ul>
                {
                    /* descripcion.map( d => {
                        return <li>{d.tema}</li>
                    }) */
                }
            </ul>
        </div>
        
    );
}

export default AprendizajeSemanaItem;