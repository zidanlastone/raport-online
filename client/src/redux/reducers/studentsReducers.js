import { GET_STUDENTS, ADD_STUDENT, DELETE_STUDENT, LOADING_STUDENT, GET_DETAIL_STUDENT, GET_STUDENTS_BY_GRADE } from '../actions/types';

const initialState = {
    students: [],
    detail:[],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_STUDENTS:
            return {
                ...state,
                students: action.payload,
                loading: false
            };
        case GET_STUDENTS_BY_GRADE:
            return {
                ...state,
                students: action.payload,
                loading: false
            };
        case GET_DETAIL_STUDENT:
            return{
                ...state,
                detail:action.payload,
                loading:false
            };
        case DELETE_STUDENT:
            return {
                ...state,
                students: state.students.filter(student => student.id !== action.payload)
            };
        case ADD_STUDENT:
            return {
                ...state,
                students: [action.payload, ...state.students]
            };
        case LOADING_STUDENT:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
