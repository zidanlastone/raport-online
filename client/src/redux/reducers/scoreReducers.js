import {
  GET_SCORES,
  ADD_SCORE,
  DELETE_SCORE,
  LOADING_SCORE,
  GET_DETAIL_SCORE,
  GET_SCORES_BY_GRADE
} from "../actions/types";

const initialState = {
  scores: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SCORES:
      return {
        ...state,
        scores: action.payload,
        loading: false
      };
    case GET_SCORES_BY_GRADE:
      return {
        ...state,
        scores: action.payload,
        loading: false
      };
    case GET_DETAIL_SCORE:
      return {
        ...state,
        scores: action.payload,
        loading: false
      };
    case DELETE_SCORE:
      return {
        ...state,
        scores: state.scores.filter(score => score.id !== action.payload)
      };
    case ADD_SCORE:
      return {
        ...state,
        scores: [action.payload, ...state.scores]
      };
    case LOADING_SCORE:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
