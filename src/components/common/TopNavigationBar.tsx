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
      <div className="fixed z-50 w-full p-4 backdrop-blur-sm backdrop-filter">
        <div className="m-auto">
          <div className=" flex justify-between ">
            <div className=" flex items-center gap-3">
              <div className="block lg:hidden">
                <button className="" onClick={toggleNavigationbar}>
                  <MenuIcon />
                </button>
              </div>
              <div className=" pr-5 text-lg ">Logo</div>
            </div>
            <div>
              <ul className="hidden h-full items-center justify-between gap-12   lg:flex ">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contect</li>
                <li>Careers </li>
              </ul>
            </div>
          </div>
        </div>
        {isDrawerOpen && (
          <div className="">
            <ul className="h-full items-center justify-between gap-12  lg:flex ">
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
