import React from 'react';
import team from './Team';
import TeamItem from './TeamItem';

const TeamList = () => {
    return (
        <>
            <section>
                <h3 className='ms-madi'>Equipo de Trabajo</h3>
                    <hr />
                    <div className='container'>
                        {
                            team.map( ({id, nombre, imagen, width}) => 
                                <TeamItem 
                                    key={id}
                                    id={id}
                                    nombre={nombre}
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

export default TeamList;