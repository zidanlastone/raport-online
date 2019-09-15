import axios from "axios";
import {
  GET_TEACHERS,
  ADD_TEACHER,
  DELETE_TEACHER,
  LOADING_TEACHER,
  GET_DETAIL_TEACHER
} from "./types";

import { tokenConfig } from "./authActions";

import { returnErrors } from "./errorActions";

export const getTeachers = () => (dispatch, getState) => {
  dispatch(setTeacherLoading());
  axios
    .get("/api/teachers", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_TEACHERS,
        payload: res.data
      })
    )
    .catch(err => returnErrors(err.response.data, err.response.status));
};

export const getTeacherDetail = id => (dispatch, getState) => {
  axios
    .get(`/api/teachers/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_DETAIL_TEACHER,
        payload: res.data
      })
    )
    .catch(err => returnErrors(err.response.data, err.response.status));
};

export const addTeacher = teacher => (dispatch, getState) => {
  axios
    .post("/api/teachers", teacher, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_TEACHER,
        payload: res.data
      })
    )
    .catch(err => returnErrors(err.response.data, err.response.status));
};
export const deleteTeacher = id => (dispatch, getState) => {
  axios
    .delete(`/api/teachers/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_TEACHER,
        payload: id
      })
    )
    .catch(err => returnErrors(err.response.data, err.response.status));
};

export const setTeacherLoading = () => {
  return {
    type: LOADING_TEACHER
  };
};
