import { Outlet } from "react-router-dom";
import TopNavigationBar from "../components/common/TopNavigationBar";

function MainLayout() {
  return (
    <div>
      <TopNavigationBar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
