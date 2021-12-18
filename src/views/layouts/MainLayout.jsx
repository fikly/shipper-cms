import React, {Fragment, Suspense} from 'react';
import {Helmet} from 'react-helmet';
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
                <Sidebar />
                <div className="main-layout">
                    <Navbar />
                    <Container />
                </div>
            </Suspense>
        </Fragment>
    );
};

export default MainLayout;
