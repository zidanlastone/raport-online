import React, { lazy, Suspense } from "react";

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

import Loading from "../loader/Loading";
import PrivateRoute from "../PrivateRoute";

const TopNavbar = lazy(() => import("../TopNavbar/TopNavbar"));
const Dashboard = lazy(() => import("../dashboard/Dashboard"));
const Student = lazy(() => import("../student/Student"));
const StudentAtGrade = lazy(() => import("../student/StudentAtGrade"));
const Teacher = lazy(() => import("../teacher/Teacher"));
const Subject = lazy(() => import("../subject/Subject"));
const Competency = lazy(() => import("../competency/Competency"));
const Grades = lazy(() => import("../grades/Grades"));
const Scores = lazy(() => import("../scores/Scores"));

const adminRoutes = [
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/admin/student",
    name: "Students",
    component: Student
  },
  {
    path: "/admin/teachers",
    name: "Teachers",
    component: Teacher
  },
  {
    path: "/admin/subjects",
    name: "Subjects",
    component: Subject
  },
  {
    path: "/admin/competency",
    name: "Competency",
    component: Competency
  },
  {
    path: "/admin/grades",
    name: "Grades",
    component: Grades
  },
  {
    path: "/admin/scores",
    name: "Scores",
    component: Scores
  },
  {
    path: "/admin/grades/:id",
    component: StudentAtGrade
  }
];

const loading = () => <Loading />;
function Admin({ auth }) {
  
  if (!auth.isAuthenticated) {
    return <Redirect  to="/login" />
  }

  return (
    <div>
      <Suspense fallback={loading()}>
        <TopNavbar routes={adminRoutes} />
        {adminRoutes.map((route, index) => (
          <PrivateRoute
            exact
            key={index}
            path={route.path}
            component={route.component}
          />
        ))}
      </Suspense>
    </div>
  );
}

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});


export default connect(mapStateToProps)(Admin);
