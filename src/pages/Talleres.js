import React from 'react';
import '../css/style.css';

const Talleres = () => {
    return (
        <>
            <section className='bg-gray text-center'>
               <h1 className='ms-madi '>Talleres</h1>
           </section>

           <section>
                <div className='d-flex mb-4'>
                    <div className='container-talleres mb-4'> 
                        <h4>Mapa Conceptual - Evolucion del software</h4>
                        <iframe 
                            src="https://drive.google.com/file/d/1Vh6ynQOGd4l09rjwTQ-29D3TVnruRq2j/preview" 
                            className='m-3'
                            width="550" height="480" allow="autoplay" title='mapa'
                        ></iframe>

                    </div>

                    <div className='container-talleres mb-4'>
                        <h4>Referencias Bibliograficas</h4>
                        <iframe 
                            src="https://drive.google.com/file/d/1ZkYreTWZaBwpmdUDHz6gg4oworalGK72/preview" 
                            className='m-3'
                            width="550" height="480" allow="autoplay" title='referencias'
                        ></iframe>
                    </div>
                </div>

                <div className=' mb-4 '>
                    <div className='container-talleres mb-4 '>
                        <h4>Pert</h4>
                        <iframe 
                            src="https://drive.google.com/file/d/1_fMfgtKN5RY-G-cMRGXBzb4XdnU9k_zT/preview" 
                            width="500" height="480" title='PERT'
                        ></iframe>
                    </div>
                </div>

                <div className='d-flex mb-4 '>
                    <div className='container-talleres mb-4 '>
                        <h4>Estimaciones</h4>
                        <iframe 
                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSjh6YSgjBH1SOnBIFbYfqD5lqEf_zHnBT4xvQXmFfCbUJTGkczTxa45STNvg107w/pubhtml?widget=true&amp;headers=false"
                            width="500" height="480" title='Estimaciones'
                        ></iframe>
                    </div> 

                    <div className='container-talleres mb-4 '>
                        <h4>Riesgos y estrategias</h4>
                        <iframe 
                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTeAkH2aFd9cM3aDd-DxoobCaPdXLaqDDq3b_CScJbl8bQP0U-ZI5oQlnkXlDhUGQ/pubhtml?widget=true&amp;headers=false"
                            width="500" height="480" title='Riesgos y estrategias'
                        ></iframe>
                    </div>
                </div>

                <div className='d-flex mb-4'>
                    <div className='container-talleres mb-4 '>
                        <h4>Metricas</h4>
                        <iframe 
                            src="https://docs.google.com/document/d/e/2PACX-1vSHJubXHB_bJvZAp8EdNI1x7Jgmdt_jJUOmWBtrmBINqkUcJELODEwRv_aZesVYIA/pub?embedded=true"
                            width="500" height="480" title='Metricas'    
                        ></iframe>
                    </div>

                    <div className='container-talleres mb-4 '>
                        <h4>Evaluacion Metricas</h4>
                        <iframe 
                            src="https://docs.google.com/document/d/e/2PACX-1vSQrDS1yA6yS3PEWGTLo1ErU-mzWpHkZnzW2fMugB4zRRxIvsxqrFV9yuHTFO9_ZQ/pub?embedded=true"
                            width="500" height="480" title='Evaluacion Metricas'
                        ></iframe>
                    </div>
                </div>

                <div className='d-flex mb-4'>
                    <div className='container-talleres mb-4 '>
                        <h4>Pruebas a la tienda virtual Somar</h4>
                        <iframe 
                            src="https://docs.google.com/document/d/e/2PACX-1vQyx0ctDR6EZvkPs5d8-qG-FR8nGnbGTeVBmDHl-E_-EcgOldGFGHzbJ5tSet8ZbCGj0Dc-_Wmvahag/pub?embedded=true"
                            width="500" height="480" title='Evaluacion Metricas'
                        ></iframe>
                    </div>  

                    <div className='container-talleres mb-4 '>
                        <h4>Criterios de aceptacion a la tienda virtual Somar</h4>
                        <iframe 
                            src="https://docs.google.com/document/d/e/2PACX-1vRzbtpWxZvyffyyGt_o4W95azSDxV_yq7A8vWhzNfTfT5h5tQfqN24FohovgJysLA/pub?embedded=true"
                            width="500" height="480" title='Criterios de aceptacion'
                        ></iframe>
                    </div>
                </div>

        </section>

        </>
    );
}

export default Talleres;