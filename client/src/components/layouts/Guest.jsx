import React,{lazy, Suspense} from 'react'

import {
    Route
} from 'react-router-dom'

const TopNavbar = lazy(()=> import('../TopNavbar/TopNavbar'));
const Home = lazy(() => import('../home/Home'));

const loading = () => <h1>Loading</h1>;

const guestRoute = [
    {
        path:  '/',
        name:  'Home',
        component: Home
    }
];

function Guest() {
    return (
        <Suspense fallback={ loading() }>
            <TopNavbar routes={guestRoute} />
            {guestRoute.map((route, index) => (
                    <Route key={index} path={route.path} component={route.component}/>
                ))}
        </Suspense>
    )
}

export default Guest
