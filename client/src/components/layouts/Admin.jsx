import React,{lazy, Suspense} from 'react'

import {
    Route
} from 'react-router-dom'

import Loading from '../loader/Loading';

const TopNavbar = lazy(() => import('../TopNavbar/TopNavbar'));
const Dashboard = lazy(() => import('../dashboard/Dashboard'));
const Student = lazy(() => import('../student/Student'));
const Teacher = lazy(() => import('../teacher/Teacher'));
const Subject = lazy(() => import('../subject/Subject'));
const Competency = lazy(() => import('../competency/Competency'));



const adminRoutes = [
    {
        path: '/admin/dashboard',
        name: 'Dashboard',
        component: Dashboard
    }, {
        path: '/admin/student',
        name: 'Students',
        component: Student
    }, {
        path: '/admin/teachers',
        name: 'Teachers',
        component: Teacher
    }, {
        path: '/admin/subjects',
        name: 'Subjects',
        component: Subject
    }, {
        path: '/admin/competency',
        name: 'Competency',
        component: Competency
    }
];

const loading = () => <Loading /> ;
function Admin() {
    return (
        <div>
            <Suspense fallback={ loading() }>
            <TopNavbar routes={adminRoutes} />
                {adminRoutes.map((route, index) => (
                    <Route key={index} path={route.path} component={route.component}/>
                ))}
            </Suspense>
        </div>
    )
}

export default Admin
