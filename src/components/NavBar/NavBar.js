import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../css/style.css';

const NavBar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/Portafolio/'>
                        <span className="navbar-brand mb-0 h1" >Coding</span>
                    </Link>

                    <button 
                        className="navbar-toggler" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div 
                        className="collapse navbar-collapse" 
                        id="navbarNav"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className='nav-link' to="/Portafolio/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to="/Portafolio/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to="/Portafolio/proyecto">Proyecto</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to="/Portafolio/talleres">Talleres</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to="/Portafolio/contacto">Contacto</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink 
                                    className='nav-link dropdown-toggle' 
                                    to="/Portafolio/semana"
                                    id="navbarDropdown" role="button" data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                >
                                    Semanas
                                </NavLink> 
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className='dropdown-item' to="/Portafolio/semana1">Semana1</NavLink></li>
                                    <li><NavLink className='dropdown-item' to="/Portafolio/semana2">Semana2</NavLink></li>
                                    <li><NavLink className='dropdown-item' to="/Portafolio/semana3">Semana3</NavLink></li>
                                    <li><NavLink className='dropdown-item' to="/Portafolio/semana4">Semana4</NavLink></li>
                                    <li><NavLink className='dropdown-item' to="/Portafolio/semana5">Semana5</NavLink></li>
                                   {/*  <li><NavLink className='dropdown-item' activeClassName="active" to="/semana6">Semana6</NavLink></li>
                                    <li><NavLink className='dropdown-item' activeClassName="active" to="/semana7">Semana7</NavLink></li> */}
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    );
}

export default NavBar;