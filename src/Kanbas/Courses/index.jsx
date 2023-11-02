import React from "react";
import {Navigate, Route, Routes, useLocation, useParams,} from "react-router-dom";
// data

// icons
import {AiOutlineMenu, AiOutlineRight} from "react-icons/ai";
// comp
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses({courses}) {
    const {courseId} = useParams();
    const course = courses.find((course) => course._id === courseId);
    const {pathname} = useLocation();
    const currentPage = pathname.split("/");

    /**
     * JSX
     */
    return (
        <div className="course__main">
            {/* header  */}
            <div className="course__header">
                <p>
                    <AiOutlineMenu style={{color: "rgb(211, 12, 12)"}}/>
                </p>
                <p style={{color: "rgb(211, 12, 12)"}}>{course.name}</p>
                <p>
                    <AiOutlineRight/>
                </p>
                <p>{currentPage.length > 0 && currentPage[currentPage.length - 1]}</p>
            </div>
            <hr/>
            <div className="course__body">
                {/* course navigation  */}
                <CourseNavigation/>
                <div className="course__details">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home"/>}/>
                        <Route path="Home" element={<Home/>}/>
                        <Route path="Modules" element={<Modules/>}/>
                        <Route path="Assignments" element={<Assignments/>}/>
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor/>}
                        />
                        <Route path="Grades" element={<Grades/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Courses;
