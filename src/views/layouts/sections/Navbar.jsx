import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {useDispatch} from 'react-redux';
import {logoIcon, logoIconAlt, userIcon, userIconAlt} from '~/libraries/images';
import {TOGGLE_MENU} from '~/states/actions/generalAction';

const Navbar = () => {
    const dispatch = useDispatch();

    const openModal = () => {
        dispatch({type: TOGGLE_MENU, data: true});
    };
    return (
        <div className="navbar-container">
            <div className="mobile-menu">
                <AiOutlineMenu className="font-24 mr-16p" onClick={() => openModal()} />
                <img src={logoIcon} alt={logoIconAlt} className="menu-logo" />
            </div>
            <h5 className="username font-12 font-600 mr-8p">Hello, <span className="color-primary">Shipper User</span></h5>
            <img src={userIcon} alt={userIconAlt} className="avatar" />
        </div>
    );
};

export default Navbar;
