import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineHome, AiOutlineTeam, AiTwotoneCalendar} from 'react-icons/ai';
import {logoIcon, logoIconAlt} from '~/libraries/images';
import {useDispatch, useSelector} from 'react-redux';
import {TOGGLE_MENU} from '~/states/actions/generalAction';

const Sidebar = () => {
    const dispatch = useDispatch();
    const general = useSelector((state) => state.general);
    const {showMenu} = general;

    const closeModal = () => {
        dispatch({type: TOGGLE_MENU, data: false});
    };
    return (
        <Fragment>
            {showMenu &&
            <div className="overlay" onClick={closeModal} />}
            <div className={`sidebar-container ${showMenu ? 'show' : ''}`}>
                <div className="logo mb-16p">
                    <img src={logoIcon} alt={logoIconAlt} />
                </div>
                <div className="sidebar-menu">
                    <Link to="/"><AiOutlineHome className="icon" /> Beranda</Link>
                    <Link to="/" className="active"><AiOutlineTeam className="icon" /> Driver Management</Link>
                    <Link to="/"><AiTwotoneCalendar className="icon" /> Pickup</Link>
                </div>
            </div>
        </Fragment>
    );
};

export default Sidebar;
