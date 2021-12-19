import React, {Fragment, Suspense} from 'react';
import {Helmet} from 'react-helmet';
import Notifications from 'react-notify-toast';
import Loading from '~/components/loading/Loading';

import Navbar from './sections/Navbar';
import Sidebar from './sections/Sidebar';

import './layout.scss';

const MainLayout = ({Container, title}) => {
    return (
        <Fragment>
            <Helmet>
                <title>Shipper CMS - {title}</title>
            </Helmet>
            <Suspense fallback={
                <Loading />
            }>
                <div className="main-container">
                    <Notifications />
                    <Sidebar />
                    <div className="main-layout">
                        <Navbar />
                        <div className="main-content">
                            <Container />
                        </div>
                    </div>
                </div>
            </Suspense>
        </Fragment>
    );
};

export default MainLayout;
