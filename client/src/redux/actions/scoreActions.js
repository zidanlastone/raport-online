import axios from 'axios';
import {
    GET_SCORES,
    GET_SCORES_BY_GRADE,
    ADD_SCORE,
    DELETE_SCORE,
    LOADING_SCORE,
    GET_DETAIL_SCORE
} from './types';
import {
    tokenConfig
} from './authActions';
import {
    returnErrors
} from './errorActions';

export const getScores = () => (dispatch,getState) => {
    dispatch(setScoresLoading());
    axios
        .get('api/nilai',tokenConfig(getState))
        .then(res =>
            dispatch({
                type: GET_SCORES,
                payload: res.data
            })
        )
        .catch(err => returnErrors(err.response.data, err.response.status));
};

export const getScoresByCompetency = (id) => (dispatch,getState) => {
    dispatch(setScoresLoading());
    axios
    .get(`/api/kompetensi-dasar/nilai/${id}`,tokenConfig(getState))
    .then(res=> dispatch({
        type:GET_SCORES,
        payload: res.data
    }))
    .catch(err => returnErrors(err.response.data, err.response.status));
}

export const getScoresByGrade = (id) => (dispatch,getState) => {
    dispatch(setScoresLoading());
    axios
        .get(`api/nilai/${id}`,tokenConfig(getState))
        .then(res =>
            dispatch({
                type: GET_SCORES_BY_GRADE,
                payload: res.data
            })
        )
        .catch(err => returnErrors(err.response.data, err.response.status));
};


export const getScoreDetail = (id) => (dispatch,getState) => {
    axios
        .get(`api/nilai/${id}`,tokenConfig(getState))
        .then(res =>
            dispatch({
                type: GET_DETAIL_SCORE,
                payload: res.data
            })
        )
        .catch(err => returnErrors(err.response.data, err.response.status));
}

export const addScores = (Scores) => (dispatch,getState) => {
    axios
        .post('api/nilai', Scores,tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_SCORE,
                payload: res.data
            })
        )
        .catch(err => returnErrors(err.response.data, err.response.status));
};
export const deleteScore = (id) => (dispatch,getState) => {
    axios.delete(`/api/nilai/${id}`,tokenConfig(getState))
        .then(res =>
            dispatch({
                type: DELETE_SCORE,
                payload: id
            })
        )
        .catch(err => returnErrors(err.response.data, err.response.status));
};

export const setScoresLoading = () => {
    return {
        type: LOADING_SCORE
    };
};
