import axios from "axios";
import {
  GET_DEPARTEMENT,
  ADD_DEPARTEMENT,
  DELETE_DEPARTEMENT,
  LOADING_DEPARTEMENT,
  GET_DETAIL_DEPARTEMENT
} from "./types";

import { tokenConfig } from "./authActions";

import { returnErrors } from "./errorActions";

export const getDepartement = () => (dispatch, getState) => {
  dispatch(setDepartementLoading());
  axios
    .get("/api/departements", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_DEPARTEMENT,
        payload: res.data
      })
    )
    .catch(err => returnErrors(err.response.data, err.response.status));
};

export const getDepartementDetail = id => (dispatch, getState) => {
  axios
    .get(`/api/departements/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_DETAIL_DEPARTEMENT,
        payload: res.data
      })
    )
    .catch(err => returnErrors(err.response.data, err.response.status));
};

export const addDepartement = departement => (dispatch, getState) => {
  axios
    .post("/api/departements", departement, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_DEPARTEMENT,
        payload: res.data
      })
    )
    .catch(err => returnErrors(err.response.data, err.response.status));
};
export const deleteDepartement = id => (dispatch, getState) => {
  axios
    .delete(`/api/departements/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_DEPARTEMENT,
        payload: id
      })
    )
    .catch(err => returnErrors(err.response.data, err.response.status));
};

export const setDepartementLoading = () => {
  return {
    type: LOADING_DEPARTEMENT
  };
};
