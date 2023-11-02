import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {modules as initialmodules} from "../../Database/index.js";
import {AiOutlineDelete, AiOutlineEdit, AiOutlinePlus} from "react-icons/ai";
import {VscPassFilled} from "react-icons/vsc";
import {CiMenuKebab} from "react-icons/ci";
import {MdDragIndicator} from "react-icons/md";

function ModuleList() {
    const {courseId} = useParams();
    const [modules, setModules] = useState(initialmodules);
    const [module, setModule] = useState({
        name: "New Module",
        description: "New Description",
        course: courseId,
    });

    const addModule = () => {
        setModules([
            {...module, _id: new Date().getTime().toString()},
            ...modules,
        ]);
    };

    const deleteModule = (moduleId) => {
        setModules(modules.filter((module) => module._id !== moduleId));
    };

    const updateModule = () => {
        setModules(
            modules.map((m) => {
                if (m._id === module._id) {
                    return module;
                } else {
                    return m;
                }
            })
        );
    };

    return (
        <div className="module__list">
            {/* module list buttons */}
            <div className="module__list__btns">
                <button className="btn btn-secondary">Collapse All</button>
                <button className="btn btn-secondary">View Progress</button>
                <button className="btn btn-secondary">
                    <VscPassFilled/> Publish All
                </button>
                <button onClick={addModule} className="btn btn-danger">
                    <AiOutlinePlus/>
                    Module
                </button>
                <button className="btn btn-secondary">
                    <CiMenuKebab/>
                </button>
            </div>
            <hr/>
            {/* Add/Edit Module Form */}
            <div className="module__list__form">
                <input
                    value={module.name}
                    className="form-control module-input"
                    onChange={(e) => setModule({...module, name: e.target.value})}
                    placeholder="Module Name"
                />
                <textarea
                    value={module.description}
                    className="form-control module-textarea"
                    onChange={(e) => setModule({...module, description: e.target.value})}
                    placeholder="Module Description"
                />
                <button onClick={addModule} className="btn btn-success module-btn">Add</button>
                <button onClick={updateModule} className="btn btn-primary module-btn">Update</button>
            </div>
            <hr/>
            {/* module list body */}
            <div className="module__list__body">
                {modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <React.Fragment key={index}>
                            {/* module list items */}
                            <div className="module__list__item">
                                <div className="module__list__item__head">
                                    <div className="module__list__item__head__left">
                                        <p>
                                            <MdDragIndicator
                                                style={{fontSize: "1.5rem", marginBottom: "-.5rem"}}
                                            />
                                        </p>
                                        <h3>{module.name}</h3>
                                    </div>
                                    {/* module list icons */}
                                    <div className="module__list__icons">
                                        <AiOutlineEdit onClick={() => setModule(module)} style={{fontSize: "1.5rem"}}/>
                                        <AiOutlineDelete onClick={() => deleteModule(module._id)}
                                                         style={{fontSize: "1.5rem", color: "red"}}/>
                                        <CiMenuKebab style={{fontSize: "1.5rem"}}/>
                                    </div>
                                </div>
                                {/* module list description */}
                                <div className="module__list__desc">{module.description}</div>
                            </div>
                        </React.Fragment>
                    ))}
            </div>
        </div>
    );
}

export default ModuleList;
