import React from 'react';
import Carrousel from '../components/Carrousel';
import IngSoftware from '../components/IngSoftware';
import ProcesosList from '../components/Procesos/ProcesosList';
import TeamList from '../components/Team/TeamList';
import Contacto from '../components/Contacto/Contacto';
import '../css/style.css';

const Home = () => {
    return (
        <>
            <Carrousel />
            <IngSoftware />
            <ProcesosList />
            <TeamList />
            <Contacto />
        </>
    );

}

export default Home;