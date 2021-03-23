import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Sidebar.css'

const Sidebar = () => {

    return (
        <>
            <div className="sidebar">
                <Link to="/" className="fa fa-fw fa-home">
                    <AccountCircleIcon /><br/>
                    Profile
                </Link>
                <Link to="/products" className="fa fa-fw fa-wrench">
                    Products
                </Link>
            </div>
        </>
    );
}

export default Sidebar
