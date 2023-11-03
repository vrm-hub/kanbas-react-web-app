import React from "react";
import {useParams} from "react-router-dom";
import {assignments} from "../../Database";
// icons
import Modules from "../Modules";

const rightPanelData = [
    {name: "Importing Existing Content"},
    {name: "Importing From Commons"},
    {name: "Choose Home Page"},
    {name: "View Course Stream"},
    {name: "New Announcement"},
    {name: "New Analytics"},
    {name: "View Course Notifications"},
];

const Home = () => {
    const {courseId} = useParams();
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId,
    );

    /**
     * JSX
     */
    return (
        <div className="home">
            {/* home buttons */}
            <hr/>
            <div className="home__body__layout">
                <div className="home__body">
                    <Modules/>
                </div>
                {/* home right panel */}
                <div className="home__right__panel">
                    <div className="right__panel__top">
                        {rightPanelData.map((item, idx) => (
                            <div key={idx} className="right__panel__top__element">
                                {item.name}
                            </div>
                        ))}
                    </div>
                    <div className="right__panel__bottom">
                        <h3>To Do</h3>
                        <hr/>
                        <div>
                            {courseAssignments.map((assignment, index) => (
                                <div className="grade-assg-title">
                                    <h5>Grade {assignment.title}</h5>
                                    <p>100 points . Due Oct 4 at 11:59pm </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
