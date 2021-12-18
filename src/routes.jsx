import {lazy} from 'react';

const Homepage = lazy( () => import('~/views/containers/home/Home') );

const routes = [
    {title: 'Homepage', container: Homepage, exact: true, path: '/'},
];

export default routes;
