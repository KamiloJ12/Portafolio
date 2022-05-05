import React from 'react';


const Footer = () => {
    return (
        <footer className='bg-dark'>
            <div className='row'>
                <div className='col-2'>   
                    <h3 className='ms-madi'>Coding</h3>
                </div>
                <div className='col-6'>
                    <h3 className='ms-madi'>¿Quienes somos?</h3>
                    <p>Somos una empresa de servicios de TI 
                        especializada en la ejecución de proyectos de infraestructura y desarrollo de Software web.</p>
                </div>
                <div className='col'> 
                    <h3 className='ms-madi'>Servicios</h3>
                    <ul>
                        <li>Analisis de Software Web</li>
                        <li>Diseño de Software Web</li>
                        <li>Desarrollo de Software Web</li>
                    </ul>
                </div>
            </div>
        </footer>
    ); 
}

export default Footer;