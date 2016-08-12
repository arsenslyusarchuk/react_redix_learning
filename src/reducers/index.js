import {combineReducers} from 'redux';
// because it's exported as default we can give whatever name we want
import courses from './courseReducer';

// we coule use courses: courses
// but because it's ES6 we can use this 
// shorthand property name
const rootReducer = combineReducers({
  courses
});

export default rootReducer;