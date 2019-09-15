import {
  GET_TEACHERS,
  ADD_TEACHER,
  DELETE_TEACHER,
  LOADING_TEACHER,
  GET_DETAIL_TEACHER
} from "../actions/types";

const initialState = {
  teachers: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TEACHERS:
      return {
        ...state,
        teachers: action.payload,
        loading: false
      };
    case GET_DETAIL_TEACHER:
      return {
        ...state,
        teachers: action.payload,
        loading: false
      };
    case DELETE_TEACHER:
      return {
        ...state,
        teachers: state.teachers.filter(
          teacher => teacher.id !== action.payload
        )
      };
    case ADD_TEACHER:
      return {
        ...state,
        teachers: [action.payload, ...state.teachers]
      };
    case LOADING_TEACHER:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
