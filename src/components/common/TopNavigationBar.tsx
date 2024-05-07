//icons

function TopNavigationBar() {
  return (
    <>
      <div className="fixed w-full border-b-2 border-b-gray-200 p-2 backdrop-filter backdrop-blur-sm">
        <div className="m-auto">
          <div className=" flex justify-between">
            <div className=" flex items-center gap-3">
              <div className=" pr-5 text-lg text-white">Logo</div>
            </div>
            <div>
              <ul className="flex justify-between gap-12 text-white items-center h-full">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contect</li>
              </ul>
            </div>
            <div className="  items-center gap-4 flex ">
              <div>
                <img
                  className="size-10 rounded-full"
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
