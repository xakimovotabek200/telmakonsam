import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from "./cart.svg";

function Navbar({ cartLength }) {
    return (
        <nav>
            <div className="logo">
                <h1>Otash movie</h1>
            </div>
            <ul className='ul_flex'>
                <Link to="/">Home</Link>
                <Link to={"/action"}>Action</Link>
                <Link to={"/horror"}>Horror</Link>
                <Link to={"/sports"}>Sports</Link>
                <Link to={"/fantasy"}>Fantasy</Link>
                <div className="cart-icon">
                    <img src={CartIcon} alt="" />
                    <span>{cartLength}</span>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;
