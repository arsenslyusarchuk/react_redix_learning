import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: '' }
    };

    // instead of calling ".bind(this)" in the render
    // which is less performance
    // we do it here
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onTitleChange(event) {
    let course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onFormSubmit() {
    this.props.actions.createCourse(this.state.course);
    // this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return(
      <div>
        <h1>Course Page goes here...</h1>
        {this.props.courses.map(this.courseRow)}
        <h2> Add Course </h2>
        <input 
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />

        <input 
          type="submit"
          onClick={this.onFormSubmit}
          value="save"
        />
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
