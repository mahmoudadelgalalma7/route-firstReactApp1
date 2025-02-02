import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'


export default function Header() {

  
  return (
    <nav className="navbar navbar-expand-lg sticky-top py-4">
        <div className="container text-uppercase gap-4">
            <Link className="navbar-brand text-white fs-2" to="/">Start Framework</Link>
            <button className="navbar-toggler border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav gap-4 align-items-start">
                <NavLink className="nav-link text-white p-2 rounded-2" aria-current="page" to="/about">About</NavLink>
                <NavLink className="nav-link text-white p-2 rounded-2" to="/portfolio">Portfolio</NavLink>
                <NavLink className="nav-link text-white p-2 rounded-2" to="/contact">Contact</NavLink>
            </div>
            </div>
        </div>
    </nav>
  )
}
