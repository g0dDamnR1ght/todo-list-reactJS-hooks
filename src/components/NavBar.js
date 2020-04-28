import React from 'react'
import {Link} from 'react-router-dom'



const NavBar = () => {

    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <a className="navbar-brand" href="/">TODO List</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link" to="/done" >Done</Link>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar