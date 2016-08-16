import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    // using ES6 object destruction
    const {courses} = this.props;
  
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes =  {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired     
};

// -------------- Redux Section --------------

// to access store data inside current component via props
// like this.props.courses
// we define that function
// state.courses name comes from courseReducer.js
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}


// to bind actions to our component 
// we use import {bindActionCreators} from 'redux';
// and it's syntax
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

// We haven't specified second param for connect function "mapDispatchToProps"
// this is optional param that defines what actions we can dispatch from component
// By ommiting it, redux inserts that automatically for us
// -------------------------------------------------------------------------------
// export default connect(mapStateToProps)(CoursesPage);
