function TopNavigationBar() {
  return (
    <>
      <div className=" w-full border-b-2 border-b-gray-200 p-2">
        <div className="m-auto ">
          <div className=" flex justify-between">
            <div>
              <div className=" flex items-center gap-3">
                <button className=" hover:bg-gray-200 px-2 rounded-md py-1">
                  {/* <MenuRoundedIcon /> */}
                </button>
                <div className=" pr-5 text-lg">And Name</div>
              </div>
            </div>
            <div className="  items-center gap-4 flex ">
              <div className="hidden sm:block"></div>
              <div className="hidden sm:flex  justify-center items-center border size-10 rounded-md border-gray-200 hover:bg-gray-100">
                <a href="https://github.com/Piyush2627">{/* <GitHub /> */}</a>
              </div>
              <div className="hidden sm:flex  justify-center items-center border size-10 rounded-md border-gray-200 hover:bg-gray-100">
                {/* <AttachmentIcon /> */}
              </div>
              <div className="hidden sm:flex  justify-center items-center border size-10 rounded-md border-gray-200 hover:bg-gray-100">
                {/* <AttachmentIcon /> */}
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
