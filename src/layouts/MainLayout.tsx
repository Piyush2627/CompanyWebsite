import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";

function MainLayout() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
