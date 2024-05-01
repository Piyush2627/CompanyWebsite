//icons
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
function TopNavigationBar() {
  return (
    <>
      <div className="fixed w-full border-b-2 border-b-gray-200 p-2 backdrop-filter backdrop-blur-sm">
        <div className="m-auto ">
          <div className=" flex justify-between">
            <div>
              <div className=" flex items-center gap-3">
                <button className=" hover:bg-gray-200 px-2 rounded-md py-1">
                  <MenuIcon />
                </button>
                <div className=" pr-5 text-lg">Logo And Name</div>
              </div>
            </div>
            <div className="  items-center gap-4 flex ">
              <div className="hidden sm:block"></div>
              <div className="hidden sm:flex  justify-center items-center border size-10 rounded-md border-gray-200 hover:bg-gray-100">
                <a href="https://github.com/Piyush2627">
                  <GitHubIcon />
                </a>
              </div>
              <div className="hidden sm:flex  justify-center items-center border size-10 rounded-md border-gray-200 hover:bg-gray-100">
                <AddToDriveIcon />
              </div>
              <div className="hidden sm:flex  justify-center items-center border size-10 rounded-md border-gray-200 hover:bg-gray-100">
                <AddToDriveIcon />
              </div>
              <div>
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://picsum.photos/200"
                  alt="Rounded avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNavigationBar;
