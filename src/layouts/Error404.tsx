import TopNavigationBar from "../components/common/TopNavigationBar";

function Error404() {
  return (
    <>
      <TopNavigationBar />
      <div className="bg-white dark:bg-cinder-950 ">
        <div className="flex h-screen w-screen items-center justify-center">
          <div className="  text-9xl uppercase text-white">
            e<span className="text-amethyst-500">rro</span>r 4
            <span className="text-amethyst-500">0</span>4
          </div>
        </div>
      </div>
    </>
  );
}

export default Error404;
