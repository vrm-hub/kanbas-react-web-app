import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import AssignmentsHeader from "./AssignmentsHeader";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="col col-11">
      <AssignmentsHeader />
      <div className="list-group">
        <li className="list-group-item">
          <h5>ASSIGNMENTS</h5>
        </li>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
          >
            {assignment.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
