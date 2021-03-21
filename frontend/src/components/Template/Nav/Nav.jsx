import React from 'react'
import { Link } from "react-router-dom"

import './Nav.css'

export default props => 
    <nav className="nav">
        <ul>
            <li>
                <Link className="navLink" to="/home">
                    MarcalFlix
                </Link> 
            </li>
            <li>
                <Link className="navLink" to="/home"> 
                    Categoria
                </Link> 
            </li>
            <li>
                <Link className="navLink" to="/home"> 
                    Jogos
                </Link> 
            </li>
            <li>
                <Link className="navLink" to="/administration"> 
                    Administração
                </Link> 
            </li>
        </ul>
    </nav>