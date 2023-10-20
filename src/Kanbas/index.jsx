import {Navigate, Route, Routes} from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function kanbas() {
    return (
        <div>
            <KanbasNavigation/>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard"/>}/>
                    <Route
                        path="Account"
                        element={
                            <div style={{float: "right", width: "calc(100% -  130px)"}}>
                                Account
                            </div>
                        }
                    />
                    <Route path="Dashboard" element={<Dashboard/>}/>
                    <Route path="Courses/:courseId/*" element={<Courses/>}/>
                    <Route path="Calendar" element={<h1 style={{left: "100px", position: "relative"}}>Calendar</h1>}/>

                </Routes>
            </div>
        </div>
    );
}

export default kanbas;
