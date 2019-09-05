import axios from 'axios';
import {
    GET_GRADES,
    ADD_GRADE,
    DELETE_GRADE,
    LOADING_GRADE,
    GET_DETAIL_GRADE
} from './types';

import {
    tokenConfig
} from './authActions';

import {
    returnErrors
} from './errorActions';

export const getGrades = () => (dispatch,getState) => {
    dispatch(setGradeLoading());
    axios
        .get('/api/kelas',tokenConfig(getState))
        .then(res =>
            dispatch({
                type: GET_GRADES,
                payload: res.data
            })
        )
        .catch(err => returnErrors(err.response.data, err.response.status));
};

export const getGradeDetail = (id) => (dispatch,getState) => {
    axios
        .get(`api/kelas/${id}`,tokenConfig(getState))
        .then(res =>
            dispatch({
                type: GET_DETAIL_GRADE,
                payload: res.data
            })
        )
        .catch(err => returnErrors(err.response.data, err.response.status));
}

export const addGrade = (Grade) => (dispatch,getState) => {
    axios
        .post('api/kelas', Grade,tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_GRADE,
                payload: res.data
            })
        )
        .catch(err => returnErrors(err.response.data, err.response.status));
};
export const deleteGrade = (id) => (dispatch,getState) => {
    axios.delete(`api/kelas/${id}`,tokenConfig(getState))
        .then(res =>
            dispatch({
                type: DELETE_GRADE,
                payload: id
            })
        )
        .catch(err => returnErrors(err.response.data, err.response.status));
};

export const setGradeLoading = () => {
    return {
        type: LOADING_GRADE
    };
};
