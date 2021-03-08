import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';

const Header=()=>{
    return<Fragment>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                
                    <ul className="navbar-nav">
                        <li className="nav-item text-dark">
                        <span><i className="fa fa-bars bars"  style={{marginLeft:'-14rem'}}aria-hidden="true"></i></span>
                        
                        </li>

                        <li className="nav-item text-dark">
                        <span><i className="fa ad" aria-hidden="true"></i></span>
                        </li>

                        <li className="nav-item text-dark">
                            <span><i className="fa fa-search fees" style={{marginTop:'12px'}} aria-hidden="true"></i></span>
                        </li>
                        <li className="nav-item text-dark">
                            <span><i className="fa fa-shopping-basket trans" style={{marginTop:'12px'}} aria-hidden="true"></i></span>
                        </li>                      
                    </ul>
            </nav>
            
           
        </div>
    </Fragment>
}

export default Header;