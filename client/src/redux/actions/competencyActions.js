import axios from "axios";
import {
  GET_COMPETENCIES,
  ADD_COMPETENCY,
  DELETE_COMPETENCY,
  LOADING_COMPETENCY,
  GET_DETAIL_COMPETENCY
} from "./types";

import { tokenConfig } from "./authActions";

import { returnErrors } from "./errorActions";

export const getCompetencies = () => (dispatch, getState) => {
  dispatch(setCompetencyLoading());
  axios
    .get("/api/competencies", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_COMPETENCIES,
        payload: res.data
      })
    )
    .catch(err => returnErrors(err.response.data, err.response.status));
};

export const getCompetencyBySubject = id => (dispatch, getState) => {
  axios
    .get(`/api/competencies/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_DETAIL_COMPETENCY,
        payload: res.data
      })
    )
    .catch(err => returnErrors(err.response.data, err.response.status));
};

export const addCompetency = competency => (dispatch, getState) => {
  axios
    .post("/api/competencies", competency, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_COMPETENCY,
        payload: res.data
      })
    )
    .catch(err => returnErrors(err.response.data, err.response.status));
};
export const deleteCompetency = id => (dispatch, getState) => {
  axios
    .delete(`/api/competencies/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_COMPETENCY,
        payload: id
      })
    )
    .catch(err => returnErrors(err.response.data, err.response.status));
};

export const setCompetencyLoading = () => {
  return {
    type: LOADING_COMPETENCY
  };
};
