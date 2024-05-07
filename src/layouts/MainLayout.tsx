import { Outlet } from "react-router-dom";
import TopNavigationBar from "../components/common/TopNavigationBar";
import Footer from "../components/common/Footer";

function MainLayout() {
  return (
    <div>
      <TopNavigationBar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
