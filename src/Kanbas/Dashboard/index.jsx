import React from "react";
import {Link} from "react-router-dom";
// icons
import {CiMenuKebab} from "react-icons/ci";
// data
import {courses} from "../Database/index.js";
import headerImage from "../../Assests/husky.png";
import {FaEdit} from "react-icons/fa";

const Dashboard = () => {
    /**
     * JSX
     */
    return (
        <div className="dash__main">
            {/* header  */}
            <div className="dash_header">
                <p>Dashboard</p>
                <CiMenuKebab
                    style={{
                        fontSize: "2rem",
                    }}
                />
            </div>
            <hr/>
            {/* sub-header  */}
            <div className="dash_subheader">
                <p>Published Courses</p>
            </div>
            <hr/>
            {/* courses card  */}
            <div className="card__grid">
                {courses?.map(({_id, name, number, startDate, topic}, idx) => (
                    <div className="card__main" key={idx}>
                        <div className="card__top" style={{backgroundImage: `url(${headerImage})`}}></div>
                        <div className="card__text">
                            <Link to={`/Kanbas/Courses/${_id}`} className="card__course">
                                {name}
                            </Link>
                            <p className="card__course__text">
                                {number}_{startDate}
                            </p>
                            <p className="card__course__text">
                                {topic}
                            </p>
                            <div className="card__edit-icon">
                                <FaEdit/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
