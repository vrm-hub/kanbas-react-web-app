import React from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    addModule as addModuleAction,
    deleteModule as deleteModuleAction,
    setModule as setModuleAction,
    updateModule as updateModuleAction,
} from "./ModulesReducer"; // Assuming you have these actions in modulesReducer
import {AiOutlineDelete, AiOutlineEdit, AiOutlinePlus} from "react-icons/ai";
import {VscPassFilled} from "react-icons/vsc";
import {CiMenuKebab} from "react-icons/ci";
import {MdDragIndicator} from "react-icons/md";

function ModuleList() {
    const {courseId} = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <div className="module__list">
            {/* module list buttons */}
            <div className="module__list__btns">
                <button className="btn btn-secondary">Collapse All</button>
                <button className="btn btn-secondary">View Progress</button>
                <button className="btn btn-secondary">
                    <VscPassFilled/> Publish All
                </button>
                <button onClick={() => dispatch(addModuleAction({...module, course: courseId}))}
                        className="btn btn-danger">
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
                    onChange={(e) => dispatch(setModuleAction({...module, name: e.target.value}))}
                    placeholder="Module Name"
                />
                <textarea
                    value={module.description}
                    className="form-control module-textarea"
                    onChange={(e) => dispatch(setModuleAction({...module, description: e.target.value}))}
                    placeholder="Module Description"
                />
                <button onClick={() => dispatch(addModuleAction({...module, course: courseId}))}
                        className="btn btn-success module-btn">Add
                </button>
                <button onClick={() => dispatch(updateModuleAction(module))}
                        className="btn btn-primary module-btn">Update
                </button>
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
                                        <AiOutlineEdit onClick={() => dispatch(setModuleAction(module))}
                                                       style={{fontSize: "1.5rem"}}/>
                                        <AiOutlineDelete onClick={() => dispatch(deleteModuleAction(module._id))}
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
