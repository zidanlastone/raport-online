import {
  GET_DEPARTEMENT,
  ADD_DEPARTEMENT,
  DELETE_DEPARTEMENT,
  LOADING_DEPARTEMENT,
  GET_DETAIL_DEPARTEMENT
} from "../actions/types";

const initialState = {
  departement: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DEPARTEMENT:
      return {
        ...state,
        departement: action.payload,
        loading: false
      };
    case GET_DETAIL_DEPARTEMENT:
      return {
        ...state,
        departement: action.payload,
        loading: false
      };
    case DELETE_DEPARTEMENT:
      return {
        ...state,
        departement: state.departement.filter(
          departement => departement.id !== action.payload
        )
      };
    case ADD_DEPARTEMENT:
      return {
        ...state,
        departement: [action.payload, ...state.departement]
      };
    case LOADING_DEPARTEMENT:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
