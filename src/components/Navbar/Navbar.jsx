import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <h1>Otash movie</h1>
            </div>
            <ul className='ul_flex'>
                <NavLink exact to={"/"} activeClassName="active">Home</NavLink>
                <NavLink to={"/action"} activeClassName="active">Action</NavLink>
                <NavLink to={"/horror"} activeClassName="active">Horror</NavLink>
                <NavLink to={"/sports"} activeClassName="active">Sports</NavLink>
                <NavLink to={"/fantasy"} activeClassName="active">Fantasy</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar;
