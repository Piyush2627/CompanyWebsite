import { Outlet } from "react-router-dom";
import TopNavigationBar from "../components/common/TopNavigationBar";
import Footer from "../components/common/Footer";

function MainLayout() {
  return (
    <div>
      <TopNavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
