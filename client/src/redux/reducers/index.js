import { combineReducers } from "redux";
import authReducers from "./authReducers";
import studentsReducers from "./studentsReducers";
import teachersReducers from "./teachersReducers";
import gradeReducers from "./gradeReducers";
import subjectReducers from "./subjectReducers";
import competencyReducers from "./competencyReducers";
import scoreReducers from "./scoreReducers";
import errorReducers from "./errorReducers";
import departementReducer from "./departementReducer";

export default combineReducers({
  students: studentsReducers,
  teachers: teachersReducers,
  grade: gradeReducers,
  subject: subjectReducers,
  competency: competencyReducers,
  scores: scoreReducers,
  errors: errorReducers,
  auth: authReducers,
  departement: departementReducer
});
