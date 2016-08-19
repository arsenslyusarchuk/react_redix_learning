import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course, actions}) => {
  const deleteitem = function() {
    actions.deleteCourse(course);
  };

  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
      <td>
        <button type="button" 
                className="btn btn-danger"
                onClick={deleteitem}>
                Delete
        </button>
        </td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default CourseListRow;
