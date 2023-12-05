import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

const CourseHeader = ({ course }) => {
  const { pathname } = useLocation();
  const pathParts = pathname.split("/");
  const lastPart = pathParts[pathParts.length - 1];
  const formattedLastPart = lastPart.replace(/([a-z])([A-Z])/g, "$1 $2");

  return (
    <div className="kanbas-course-header">
      <nav className="kanbas-course-breadcrumb">
        <ol className="breadcrumb kanbas-breadcrumbs">
          <li className="breadcrumb-item">
            <Link
              to={`/Kanbas/Courses/${course._id}/Home`}
              className="kanbas-course-header-link"
            >
              {course.number}
            </Link>
          </li>
          <li className="breadcrumb-item active">{formattedLastPart}</li>
        </ol>
      </nav>
      <div className="kanbas-course-header-divider">
        <hr />
      </div>
    </div>
  );
};

export default CourseHeader;
