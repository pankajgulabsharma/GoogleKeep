import React from 'react'
import logo from './Images/img2.png'
const Header = () => {
    return (
        <>
            <div className="header">

                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="70" height="50" className="d-inline-block align-top mx-4" alt="" loading="lazy" />
                         Pankaj Keep
                    </a>
                </nav>
                
            </div>
        </>
    )
}

export default Header;