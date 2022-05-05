import React from 'react';
import TeamList from '../components/Team/TeamList';

const About = () => {
    return (
        <>
            <section className='bg-gray'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-5'>
                            <h2 className='ms-madi'>Coding</h2>
                        </div>
                        <div className='col-12 col-md-7'>
                            <p id='definicion-ingSoft'>
                            Somos una empresa con un equipo joven de profesionales apasionados por el desarrollo de soluciones TI, 
                            que combinan trabajo en equipo, creatividad e innovación para lograr productos y servicios de calidad. 
                            Preveemos servicios especializados en la ejecución de proyectos de infraestructura y desarrollo de software, 
                            para la pequeña, mediana y gran empresa.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <TeamList />
        </>
    );
}

export default About;