import React, {PropTypes} from 'react';

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
    alert(`Submitting course ${this.state.course}`);
  }

  render() {
    return(
      <div>
        <h1>Course Page goes here...</h1>
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

export default CoursesPage;
