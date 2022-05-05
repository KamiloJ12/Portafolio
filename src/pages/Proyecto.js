import React from 'react';

const Proyecto = () => {
    return (
        <>
            
            <section className='bg-gray'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-5'>
                            <h2 className='ms-madi'>Sistema Web para la Distribudora Dimport Comercial</h2>
                        </div>
                        <div className='col-12 col-md-7'>
                            <p id='definicion-ingSoft'>
                            La finalidad de realizar la tienda virtual es automatizar algunos procesos y que la empresa logre
                            volver más competitiva frente a otras empresas de su misma línea. Este proyecto servirá de aporte e 
                            incentivo al dueño o propietario, ya que se pretenden establecer las condiciones necesarias para que 
                            favorezca el desarrollo de esta actividad y con ella el progreso económico.<br/><br/>

                            El funcionamiento de una tienda virtual con funcionamiento las 24 horas del día será un aspecto novedoso 
                            para la empresa y sus clientes, permitiendo a sus usuarios aumentar la confianza al realizar ventas 
                            mediante esta plataforma, por eso el proyecto aportará con nuevos aspectos tecnológicos la optimización de 
                            procesos por medio de una tienda virtual acortando distancia, disminuyendo costo y ofrecer los productos 
                            para toda la comunidad virtual.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <h3 className='ms-madi'>Primer informe</h3>
                    <iframe 
                        title='Primer Informe' 
                        src="https://docs.google.com/document/d/e/2PACX-1vQPdTbu2_aGE8HLkCbkjYa_-2EvJrQjJdLW7umyFVxEwZjZLM5-G1RDsE4XWNSLSg/pub?embedded=true"
                        width='800px'
                        height='500px'    
                    ></iframe>
                </div>
            </section>

            <section className='bg-gray'>
                <div>
                    <h3 className='ms-madi'>Segundo informe</h3>
                    <iframe 
                        title='Segundo Informe'
                        src="https://docs.google.com/document/d/e/2PACX-1vQ1knAHUKKDSMx8XyvSq_NKx7N8DdyoguR1zCvA5oF5CEBiPuYy_rtWmy-2ZEg8Fg/pub?embedded=true"
                        width='800px'
                        height='500px'
                    ></iframe>
                </div>
            </section>

            <section>
            <   div>
                    <h3 className='ms-madi'>Informe Final</h3>
                    <iframe 
                        title='Informe Final' 
                        src="https://docs.google.com/document/d/e/2PACX-1vS5i-EZhCVRr01UtTSGI23KoL1knhv12wORY_I2521zCEecEPtB8qaSl-dZQT3z3Q/pub?embedded=true"                        width='800px'
                        height='500px'    
                    ></iframe>
                </div>
            </section>
            
        </>
    );
}

export default Proyecto;