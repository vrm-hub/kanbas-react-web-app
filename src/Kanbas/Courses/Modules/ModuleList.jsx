import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {modules as initialmodules} from "../../Database/index.js";

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
            <div className="module__list__btns">
                <button onClick={addModule}>Add</button>
                <button onClick={updateModule}>Update</button>
                <input value={module.name}
                       onChange={(e) => setModule({...module, name: e.target.value})}
                />
                <textarea value={module.description}
                          onChange={(e) => setModule({...module, description: e.target.value})}
                />
            </div>
            <hr/>
            <div className="module__list__body">
                {modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <div key={index} className="module__list__item">
                            <button onClick={() => setModule(module)}>Edit</button>
                            <button onClick={() => deleteModule(module._id)}>Delete</button>
                            <h3>{module.name}</h3>
                            <p>{module.description}</p>
                            <p>{module._id}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ModuleList;
