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
      <div className="fixed w-full   p-4 backdrop-blur-sm backdrop-filter">
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
              <ul className="hidden h-full items-center justify-between gap-12  text-white lg:flex ">
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
            <ul className="h-full items-center justify-between gap-12 text-white lg:flex ">
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
