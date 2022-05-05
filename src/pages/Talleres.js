import React from 'react';

const Talleres = () => {
    return (
        <>
            <section className='bg-gray text-center'>
               <h1 className='ms-madi '>Talleres</h1>
           </section>

           <section>
               <div>
            
                    <iframe 
                        src="https://drive.google.com/file/d/1Vh6ynQOGd4l09rjwTQ-29D3TVnruRq2j/preview" 
                        className='m-3'
                        width="40%" height="480" allow="autoplay" title='mapa'
                    ></iframe>
                    <iframe 
                        src="https://drive.google.com/file/d/1ZkYreTWZaBwpmdUDHz6gg4oworalGK72/preview" 
                        className='m-3'
                        width="40%" height="480" allow="autoplay" title='referencias'
                    ></iframe>
                    <iframe 
                        src="https://drive.google.com/file/d/1_fMfgtKN5RY-G-cMRGXBzb4XdnU9k_zT/preview" 
                        width="640" height="480" allow="autoplay" title='PERT'
                    ></iframe>
                
               </div>
           </section>
        </>
    );
}

export default Talleres;