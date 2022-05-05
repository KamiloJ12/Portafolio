import React from 'react';
import AprendizajeSemanaItem from './AprendizajeSemanaItem';
import '../../css/style.css';
import semanas from './semanas.json';

const AprendizajeSemanal = () => {

    
    return (
        <>
            <section className='bg-gray'>
                <h3 className='ms-madi'>Contenido Semanal</h3>
                <hr />
                <id className='container'>
                    {
                        semanas.map( ({id, descripcion, link}) => 
                            <AprendizajeSemanaItem 
                                key={id}
                                id={id}
                                descripcion={descripcion}
                                link={link}
                            />
                        )
                    }
                </id>
            </section>
        </>
    );
}

export default AprendizajeSemanal;