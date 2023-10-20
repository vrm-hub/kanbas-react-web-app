import ES5Functions from "./ES5Functions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";

function WorkingWithFunctions() {
    console.log('Working with functions');
    return (
        <div>
            <ES5Functions/>
            <ArrowFunctions/>
            <ImpliedReturn/>
        </div>
    );
}

export default WorkingWithFunctions