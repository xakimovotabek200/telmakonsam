import React from 'react'

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <h1>Otash movie</h1>
            </div>
            <ul className='ul_flex'>
                <li>Home</li>
                <li>Action</li>
                <li>Horror</li>
                <li>Sports</li>
                <li>Fantasy</li>
            </ul>
        </nav>
    )
}

export default Navbar