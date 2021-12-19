import {lazy} from 'react';

const DriverManagement = lazy( () => import('~/views/containers/driverManagement/DriverManagement') );

const routes = [
    {title: 'Driver Management', container: DriverManagement, exact: true, path: '/'},
];

export default routes;
