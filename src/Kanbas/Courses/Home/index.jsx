import React from "react";
import {useParams} from "react-router-dom";
import {assignments, modules} from "../../Database";
// icons
import {CiMenuKebab} from "react-icons/ci";
import {VscPassFilled} from "react-icons/vsc";
import {AiOutlinePlus} from "react-icons/ai";
import {MdDragIndicator} from "react-icons/md";

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
            <div className="home__btns">
                <button className="btn btn-secondary">Collpase All</button>
                <button className="btn btn-secondary">View Progress</button>
                <button className="btn btn-secondary">
                    <VscPassFilled/> Publish All
                </button>
                <button className="btn btn-danger">
                    <AiOutlinePlus/>
                    Module
                </button>
                <button className="btn btn-secondary">
                    <CiMenuKebab/>
                </button>
            </div>
            <hr/>
            <div className="home__body__layout">
                {/* home body */}
                <div className="home__body">
                    {modules
                        ?.filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <React.Fragment key={index}>
                                {/* home items */}
                                <div className="home__item">
                                    <div className="home__item__head">
                                        <div className="home__item__head__left">
                                            <p>
                                                <MdDragIndicator
                                                    style={{fontSize: "1.5rem", marginBottom: "-.5rem"}}
                                                />
                                            </p>
                                            <h3>{module.name}</h3>
                                        </div>
                                        {/* home icons */}
                                        <div className="home__icons">
                                            <VscPassFilled
                                                style={{color: "green", fontSize: "1.5rem"}}
                                            />
                                            <AiOutlinePlus style={{fontSize: "1.5rem"}}/>
                                            <CiMenuKebab style={{fontSize: "1.5rem"}}/>
                                        </div>
                                    </div>
                                    {/* home description */}
                                    <div className="home__desc">{module.description}</div>
                                </div>
                            </React.Fragment>
                        ))}
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
