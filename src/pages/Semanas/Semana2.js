import React from 'react';

const Semana2 = () => {
    return (
        <>
            <section className='bg-gray text-center'>
               <h1 className='ms-madi '>Semana 2</h1>
            </section>

            <section>  
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-5'>
                        <h2 className='ms-madi'>Equipo de Desempeño</h2>
                        </div>
                        <div className='col-12 col-md-7'>
                            <ul>
                                <li>Grupos: Dos o más individuos, interactuantes e interdependientes, que se han reunido 
                                para alcanzar determinados objetivos específicos. Los grupos se clasifican en formales 
                                e informales, según la forma de organización, el tiempo de duración o las funciones.</li> 

                                <li>Equipo: Es aquel que es capaz de servir a los intereses de la organización, para que esta 
                                pueda cumplir la misión, pero que también ayuda a sus miembros a desarrollar una motivación 
                                y compromisos propios. Se clasifican en círculos de calidad, equipos de progreso, equipo de 
                                procesos y equipos autónomos.</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-gray'>  
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-5'>
                        <h2 className='ms-madi'>El Desarrollo de Software </h2>
                        </div>
                        <div className='col-12 col-md-7'>
                            <p>
                            Un proceso de desarrollo de software tiene como propósito la producción eficaz y 
                            eficiente de un producto software que reúna los requisitos del cliente.<br/><br/>

                            El proceso de desarrollo de software no es único. No existe un proceso de software 
                            universal que sea efectivo para todos los contextos de proyectos de desarrollo. Debido 
                            a esta diversidad, es difícil automatizar todo un proceso de desarrollo de software.<br/><br/>
                            
                            A pesar de la variedad de propuestas de proceso de software, existe un conjunto de 
                            actividades fundamentales que se encuentran presentes en todos ellos.<br/>
                            </p>
                            <ul>
                                <li>Especificación de software: Se debe definir la funcionalidad y restricciones 
                                    operacionales que debe cumplir el software.</li>
                                <li>Diseño e Implementación: Se diseña y construye el software de acuerdo a la especificación.</li>
                                <li>Validación: El software debe validarse, para asegurar que cumpla con lo que 
                                    quiere el cliente.</li>
                                <li>Evolución: El software debe evolucionar, para adaptarse a las necesidades del cliente.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Semana2;