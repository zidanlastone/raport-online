import axios from 'axios';
import { GET_SUBJECTS, ADD_SUBJECT, DELETE_SUBJECT, LOADING_SUBJECT, GET_DETAIL_SUBJECT } from './types';
import { tokenConfig } from './authActions.js';
import {
    returnErrors
} from './errorActions';

export const getSubjects = () => (dispatch,getState) => {
    dispatch(setSubjectLoading());
    axios
        .get('api/mata-pelajaran',tokenConfig(getState))
        .then(res =>
            dispatch({
                type: GET_SUBJECTS,
                payload: res.data
            })
        )
        .catch(err => returnErrors(err.response.data, err.response.status));
};

export const getSubjectDetail = (id) => (dispatch,getState) => {
    axios
        .get(`api/mata-pelajaran/${id}`,tokenConfig(getState))
        .then(res =>
            dispatch({
                type: GET_DETAIL_SUBJECT,
                payload: res.data
            })
        )
        .catch(err => returnErrors(err.response.data, err.response.status));
}

export const addSubject = (Subject) => (dispatch,getState) => {
    axios
        .post('api/mata-pelajaran', Subject,tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_SUBJECT,
                payload: res.data
            })
        )
        .catch(err => returnErrors(err.response.data, err.response.status));
};
export const deleteSubject = (id) => (dispatch,getState) => {
    axios.delete(`api/mata-pelajaran/${id}`,tokenConfig(getState))
        .then(res =>
            dispatch({
                type: DELETE_SUBJECT,
                payload: id
            })
        )
        .catch(err => returnErrors(err.response.data, err.response.status));
};

export const setSubjectLoading = () => {
    return {
        type: LOADING_SUBJECT
    };
};
