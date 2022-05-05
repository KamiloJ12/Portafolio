import React from 'react';
import ProcesoItem from './ProcesoItem';
import procesos from './Procesos';

const Procesos = () => {
    return (
        <>
            <section id='seccion-procesos'>
                <div className='container'>
                    {
                        procesos.map( ({id, proceso, descripcion, imagen, width}) => 
                            <ProcesoItem 
                                key={id}
                                proceso={proceso}
                                descripcion={descripcion}
                                imagen={imagen}
                                width={width}
                            />
                        )
                    }    
                </div>
            </section>
        </>
    );
}

export default Procesos;