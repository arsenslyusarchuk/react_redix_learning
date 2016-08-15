import {combineReducers} from 'redux';
// because it's exported as default we can give whatever name we want
import courses from './courseReducer';
import authors from './authorReducer';

// we could use courses: courses
// but because it's ES6 we can use this 
// shorthand property name
// !!!!!!!!!!!!!!! IMPORTANT !!!!!!!!!!!!!!!
// Also this name is the name which
// u use in Container component
const rootReducer = combineReducers({
  courses,
  authors
});

export default rootReducer;