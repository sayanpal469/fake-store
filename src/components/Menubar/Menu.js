import React, { useState } from 'react';
import './Menu.css'
const Menu = ({count}) => {
    return (
        <div className='row align-items-center'>
            <div className="col-lg-6">
                <h1>Logo</h1>
            </div>
            <div className="col-lg-6 menu">
                <p>Home</p>
                <p>Cart <sup>{count}</sup></p>
                <p>Log In</p>
            </div>
        </div>
    );
};

export default Menu;