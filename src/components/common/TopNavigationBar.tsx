//icons
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function TopNavigationBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const toggleNavigationbar = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="fixed w-full border-b border-b-cinder-600r- p-4 backdrop-filter backdrop-blur-sm">
        <div className="m-auto">
          <div className=" flex justify-between ">
            <div className=" flex items-center gap-3">
              <div className="block lg:hidden">
                <button className="text-white" onClick={toggleNavigationbar}>
                  <MenuIcon />
                </button>
              </div>
              <div className=" pr-5 text-lg text-white">Logo</div>
            </div>
            <div>
              <ul className="lg:flex justify-between text-white items-center h-full  hidden gap-12 ">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contect</li>
              </ul>
            </div>
          </div>
        </div>
        {isDrawerOpen && (
          <div className="text-white">
            <ul className="lg:flex justify-between gap-12 text-white items-center h-full ">
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contect</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default TopNavigationBar;
