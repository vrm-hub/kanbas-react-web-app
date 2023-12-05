import db from "../../Database";
import { useParams } from "react-router-dom";
import { FaCog } from "react-icons/fa";
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  return (
    <div className="col col-11">
      <div className="mb-4">
        <div class="d-flex justify-content-end">
          <div class="m-1">
            <button class="btn btn-secondary">
              <i class="fa-solid fa-file-import"></i> Import
            </button>
          </div>
          <div class="m-1">
            <button class="btn btn-secondary">
              <i class="fa-solid fa-file-export"></i> Export
            </button>
          </div>
          <div class="m-1">
            <button class="btn btn-secondary">
              <FaCog />
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h3>Student Names</h3>
            <input
              class="form-control"
              type="text"
              placeholder="Search Students"
              id="text-fields-text"
            />
          </div>
          <div class="col">
            <h3>Assignment Names</h3>
            <input
              class="form-control"
              type="text"
              placeholder="Search Assignments"
              id="text-fields-text"
            />
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
          </thead>

          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
