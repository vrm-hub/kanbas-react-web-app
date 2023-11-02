import React, {useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import {courses as initialCourses} from "./Database/index.js";

function Kanbas() {
    const [courses, setCourses] = useState(initialCourses); // Initial state from db or an empty array
    const [course, setCourse] = useState({
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
    });

    const addNewCourse = () => {
        setCourses([...courses, {...course, _id: new Date().getTime()}]);
    };

    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <div>
            <KanbasNavigation/>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard"/>}/>
                    <Route
                        path="Account"
                        element={
                            <div style={{left: "110px", position: "relative"}}>
                                <h1>Account</h1>
                            </div>
                        }
                    />
                    <Route
                        path="Dashboard"
                        element={
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}
                            />
                        }
                    />
                    <Route path="Courses/:courseId/*"
                           element={<Courses courses={courses}/>}/> {/* Pass courses to Courses component if needed */}
                    <Route path="Calendar" element={<h1 style={{left: "110px", position: "relative"}}>Calendar</h1>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Kanbas;
