import React from 'react';
import {NavLink} from "react-router-dom";
import navbarData from '../../data/navbar'

const NavItem = () => {
    return (
        navbarData.map(navItem => (
            <li key={navItem.id}>
                <NavLink
                    exact={navItem.link === `/`}
                    to={`${process.env.PUBLIC_URL + navItem.link}`}
                    activeClassName={'active'}>
                    {navItem.title}
                </NavLink>

            
            </li>
        ))
    );
};

export default NavItem;
