import React from 'react';
import { Link } from 'react-router-dom';
import './HamburguerMenu.scss';

const HamburguerMenu = () => {
    return (
        <div className="hamburguer-menu">
            <div className="menu-secondary-background-color">
            </div>
            <div className="menu-layer">
                <div className="menu-city-background">
                    Comentario: Las Imagenes por detrás
                </div>
                <div className="container">
                    <div className="wrapper">
                        <div className="menu-links">
                            {/* Los 3 párrafos */}
                            <nav>
                                <ul>
                                    <li>
                                        <Link to={`/oportunidades`}>Oportunidades</Link>
                                    </li>
                                    <li>
                                        <Link to={`/soluciones`}>Soluciones</Link>
                                    </li>
                                    <li>
                                        <Link to={`/contacto`}>Contactanos</Link>
                                    </li>
                                </ul>
                            </nav>
                            {/* columna de la derecha */}
                            <div className="info">
                                <h3>Nuestros Objetivos</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut eum incidunt optio, quisquam veniam fugiat, libero tempora culpa commodi quidem corporis. Asperiores saepe quod a obcaecati vel tempore, ad, harum officiis, at assumenda laboriosam! Iure laboriosam omnis exercitationem odit provident, incidunt, ipsum dicta eaque ullam inventore ad debitis rerum. Blanditiis!
                                </p>
                            </div>
                            {/* Encnuentranos */}
                            <div className="locations">
                                Locations:
                                <span>Santiago</span>
                                <span>Lima</span>
                                <span>Rio de Janeiro</span>
                                <span>São Paulo</span>
                                <span>Montevideo</span>
                                <span>Buenos Aires</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HamburguerMenu;
