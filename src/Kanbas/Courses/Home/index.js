import ModuleList from "../Modules/ModuleList";
import ModulesHeader from "../Modules/ModulesHeader";
import HomeSideMenuHeader from "./HomeSideMenu";

function Home() {
  return (
    <div className="row">
      <div className="col col-8">
        <ModulesHeader />
        <ModuleList />
      </div>
      <div className="col col-3">
        <HomeSideMenuHeader />
      </div>
    </div>
  );
}
export default Home;
