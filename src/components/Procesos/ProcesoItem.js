import React from 'react';

const ProcesoItem = ({proceso, descripcion, imagen, width}) => {

    return (
        <div className='proceso'>
            <img src={imagen} alt={imagen} width={width}/>
            <h3 className='ms-madi'> { proceso } </h3>
            <p> { descripcion } </p>
        </div>  
    );
}

export default ProcesoItem;