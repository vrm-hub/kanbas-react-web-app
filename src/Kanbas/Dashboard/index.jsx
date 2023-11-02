import React from "react";
import {Link} from "react-router-dom";
import {CiMenuKebab} from "react-icons/ci";
import {FaEdit, FaTrash} from "react-icons/fa";
import headerImage from "../../Assests/husky.png";

function Dashboard({courses, course, setCourse, addNewCourse, deleteCourse, updateCourse}) {
    // const [courses, setCourses] = useState(initialCourses);
    // const [course, setCourse] = useState({
    //     name: "New Course",
    //     number: "New Number",
    //     startDate: "2023-09-10",
    //     endDate: "2023-12-15",
    // });
    //
    // const addNewCourse = () => {
    //     setCourses([...courses, {...course, _id: new Date().getTime().toString()}]);
    // };
    //
    // const deleteCourse = (courseId) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // };
    //
    // const updateCourse = () => {
    //     setCourses(
    //         courses.map((c) => {
    //             if (c._id === course._id) {
    //                 return course;
    //             } else {
    //                 return c;
    //             }
    //         })
    //     );
    // };

    return (
        <div className="dash__main">
            {/* header */}
            <div className="dash_header">
                <p>Dashboard</p>
                <CiMenuKebab style={{fontSize: "2rem"}}/>
            </div>
            <hr/>
            {/* Add/Edit Course Form */}
            <div className="add-course-form" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <input
                    value={course.name}
                    className="form-control"
                    onChange={(e) => setCourse({...course, name: e.target.value})}
                    placeholder="Course Name"
                    style={{flex: 2}}
                />
                <input
                    value={course.number}
                    className="form-control"
                    onChange={(e) => setCourse({...course, number: e.target.value})}
                    placeholder="Course Number"
                    style={{flex: 2}}
                />
                <input
                    value={course.startDate}
                    className="form-control"
                    type="date"
                    onChange={(e) => setCourse({...course, startDate: e.target.value})}
                    style={{flex: 1}}
                />
                <input
                    value={course.endDate}
                    className="form-control"
                    type="date"
                    onChange={(e) => setCourse({...course, endDate: e.target.value})}
                    style={{flex: 1}}
                />
                <button onClick={addNewCourse} style={{
                    backgroundColor: '#28a745',
                    color: 'white',
                    padding: '5px 15px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                    Add
                </button>
                <button onClick={updateCourse} style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '5px 15px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                    Update
                </button>
            </div>
            <hr/>
            {/* courses card */}
            <div className="card__grid">
                {courses.map(({_id, name, number, startDate, topic}, idx) => (
                    <div className="card__main" key={idx}>
                        <div className="card__top" style={{backgroundImage: `url(${headerImage})`}}></div>
                        <div className="card__text">
                            <Link to={`/Kanbas/Courses/${_id}`} className="card__course">
                                {name}
                            </Link>
                            <p className="card__course__text">
                                <h5>{number}_{startDate}</h5>
                            </p>
                            <p className="card__course__text">
                                <small>{topic}</small>
                            </p>
                            <div className="card__edit-icon"
                                 style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <FaEdit onClick={(e) => {
                                    e.preventDefault();
                                    setCourse({_id, name, number, startDate, topic});
                                }} style={{cursor: 'pointer', fontSize: '1.2rem', color: '#007bff'}}/>
                                <FaTrash onClick={(e) => {
                                    e.preventDefault();
                                    deleteCourse(_id);
                                }} style={{cursor: 'pointer', fontSize: '1.2rem', color: '#dc3545'}}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
