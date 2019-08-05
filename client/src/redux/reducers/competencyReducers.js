import { GET_COMPETENCIES, ADD_COMPETENCY, DELETE_COMPETENCY, LOADING_COMPETENCY, GET_DETAIL_COMPETENCY } from '../actions/types';

const initialState = {
    competency: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COMPETENCIES:
            return {
                ...state,
                competency: action.payload,
                loading: false
            };
        case GET_DETAIL_COMPETENCY:
            return {
                ...state,
                competency: action.payload,
                loading: false
            };
        case DELETE_COMPETENCY:
            return {
                ...state,
                competency: state.competency.filter(competency => competency.id !== action.payload)
            };
        case ADD_COMPETENCY:
            return {
                ...state,
                competency: [action.payload, ...state.competency]
            };
        case LOADING_COMPETENCY:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
