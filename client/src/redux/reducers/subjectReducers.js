import {
    GET_SUBJECTS,
    ADD_SUBJECT,
    DELETE_SUBJECT,
    LOADING_SUBJECT,
    GET_DETAIL_SUBJECT
} from '../actions/types';

const initialState = {
    subjects: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SUBJECTS:
            return {
                ...state,
                subjects: action.payload,
                loading: false
            };
        case GET_DETAIL_SUBJECT:
            return {
                ...state,
                subjects: action.payload,
                loading: false
            };
        case DELETE_SUBJECT:
            return {
                ...state,
                subjects: state.subjects.filter(subject => subject.id !== action.payload)
            };
        case ADD_SUBJECT:
            return {
                ...state,
                subjects: [action.payload, ...state.subjects]
            };
        case LOADING_SUBJECT:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
