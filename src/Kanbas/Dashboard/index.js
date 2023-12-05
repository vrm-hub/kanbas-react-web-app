import { React } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div className="ml-1">
      <h1>Dashboard</h1>
      <div className="mt-4 mb-4">
        <div className="row">
          <div className="col">
            <button class="m-1 btn btn-secondary" onClick={addNewCourse}>
              Add
            </button>
            <button class="m-1 btn btn-secondary" onClick={updateCourse}>
              Update
            </button>
          </div>
          <div className="col">
            <input
              value={course.name}
              className="form-control"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
          </div>
          <div className="col">
            <input
              value={course.number}
              className="form-control"
              onChange={(e) => setCourse({ ...course, number: e.target.value })}
            />
          </div>
          <div className="col">
            <input
              value={course.startDate}
              className="form-control"
              type="date"
              onChange={(e) =>
                setCourse({ ...course, startDate: e.target.value })
              }
            />
          </div>
          <div className="col">
            <input
              value={course.endDate}
              className="form-control"
              type="date"
              onChange={(e) =>
                setCourse({ ...course, endDate: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div class="row row-cols-lg-3 g-3">
        {courses.map((course) => (
          <div>
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
              <div className="card kanbas-card">
                <div className="kanbas-card-img card-img-top"></div>
                <div className="card-body">
                  <div className="row">
                    <div className="col col-8">
                      <h5 className="card-title">{course.name}</h5>
                      <p className="card-text">
                        {course.number} <br />
                        {course.startDate} to {course.endDate}
                      </p>
                    </div>
                    <div className="col col-2">
                      <button
                        className="btn btn-secondary"
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className="mt-2 btn btn-secondary"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
