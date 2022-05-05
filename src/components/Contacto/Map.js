import React from 'react';


const Map = () => {

    return (
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.977703879919!2d-72.48916424292274!3d7.897397866999453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6645102f9b7269%3A0xab4b03ed6c85830e!2sUniversidad%20Francisco%20de%20Paula%20Santander!5e0!3m2!1ses!2sco!4v1651233477194!5m2!1ses!2sco" 
            width="600" height="450" 
            style={{border:0}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title='Map'
        ></iframe>
    );
}

export default Map;