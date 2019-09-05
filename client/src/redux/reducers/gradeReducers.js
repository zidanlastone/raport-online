import {
    GET_GRADES,
    ADD_GRADE,
    DELETE_GRADE,
    LOADING_GRADE,
    GET_DETAIL_GRADE
} from '../actions/types';

const initialState = {
    grades: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_GRADES:
            return {
                ...state,
                grades: action.payload,
                loading: false
            };
        case GET_DETAIL_GRADE:
            return {
                ...state,
                grades: action.payload,
                loading: false
            };
        case DELETE_GRADE:
            return {
                ...state,
                grades: state.grades.filter(grade => grade.id !== action.payload)
            };
        case ADD_GRADE:
            return {
                ...state,
                grades: [action.payload, ...state.grades]
            };
        case LOADING_GRADE:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
