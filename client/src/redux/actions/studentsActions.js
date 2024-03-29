import axios from "axios";
import {
  GET_STUDENTS,
  GET_STUDENTS_BY_GRADE,
  ADD_STUDENT,
  DELETE_STUDENT,
  LOADING_STUDENT,
  GET_DETAIL_STUDENT,
  CLEAR_STUDENT
} from "./types";

import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getStudents = () => (dispatch, getState) => {
  dispatch(setStudentsLoading());
  axios
    .get("/api/students", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_STUDENTS,
        payload: res.data
      })
    )
    .catch(err => returnErrors(err.response.data, err.response.status));
};

export const getStudentsByGrade = id => (dispatch, getState) => {
  dispatch(setStudentsLoading());
  axios
    .get(`/api/grades/${id}`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_STUDENTS_BY_GRADE,
        payload: res.data.students
      });
    })
    .catch(err => returnErrors(err.response.data, err.response.status));
};

export const getStudentDetail = id => (dispatch, getState) => {
  axios
    .get(`/api/students/detail/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_DETAIL_STUDENT,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const addStudents = students => (dispatch, getState) => {
  axios
    .post("/api/students", students, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_STUDENT,
        payload: res.data
      })
    )
    .catch(err => returnErrors(err.response.data, err.response.status));
};

export const updateStudent = students => (dispatch, getState) => {
  axios
    .put("/api/students", students, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_STUDENT,
        payload: res.data
      })
    )
    .catch(err => returnErrors(err.response.data, err.response.status));
};

export const deleteStudent = id => (dispatch, getState) => {
  axios
    .delete(`/api/students/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_STUDENT,
        payload: id
      })
    )
    .catch(err => returnErrors(err.response.data, err.response.status));
};

export const clearStudent = () => {
  return {
    type: CLEAR_STUDENT
  };
};

export const setStudentsLoading = () => {
  return {
    type: LOADING_STUDENT
  };
};
