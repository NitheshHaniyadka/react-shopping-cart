import React,{Fragment} from 'react';
import {Link} from 'react-router-dom'


const Header =()=>{
    return<Fragment>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#" className="text-dark">Techincal Help -+91-87907654321</a>
                <div className="collapse navbar-collapse" id="navbarCollpse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" style={{marginLeft:"47rem"}} to="/admission"><a className="nav-link text-white">-Welcome,SBIC Admin-Logout</a></Link>
                        </li>
                    </ul>
                </div>
                </nav>
        </div>
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brandn" href="#" className="text-white pl-5">Admin SBIC-UP</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
    </Fragment>
}

export default Header;
