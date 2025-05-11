import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            {/* <Link to="/">Home</Link>
            <Link to="/aboiut">About</Link>
            <Link to="/login">Login</Link> */}

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">useContext</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li> */}
                            <NavLink
                                className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}
                                to="/">
                                    Home
                            </NavLink>
                            <NavLink
                                className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}
                                to="/about">
                                    About
                            </NavLink>
                            <NavLink
                                className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}  
                                to="/login">
                                    Login
                            </NavLink>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
