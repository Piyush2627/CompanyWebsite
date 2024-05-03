import { Outlet } from "react-router-dom";
import TopNavigationBar from "../components/common/TopNavigationBar";

function MainLayout() {
  return (
    <div>
      <TopNavigationBar />
      <div className="pt-14">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
