import UpAnimation from "../animations/UpAnimation";

function HomePage() {
  return (
    <>
      <UpAnimation duration={0.8}>
        <div className="text-center pb-40">
          <div className="pt-40 m-auto max-w-64 sm:max-w-lg md:max-w-3xl lg:max-w-4xl">
            <p className="text-4xl lg:text-6xl font-bold capitalize font-Oswald tracking-wide">
              <span className="text-green-500">Logo </span>
              and name
            </p>
            <p className="mt-4 text-lg md:text-2xl lg:text-3xl font-medium font-OpenSans">
              We're all about using tech to turn ideas into reality. Leading in
              web solutions, we craft stunning websites and cutting-edge apps to
              captivate audiences and fuel business growth.
            </p>
            <div className="">
              <button className="px-5 py-3 font-medium bg-green-400 rounded-md  text-white mt-5 font-OpenSans">
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </UpAnimation>
      <UpAnimation duration={0.8} delay={0.5}>
        <div className=" lg:max-w-7xl m-auto">
          <div className="flex justify-between p-5">
            <div className="w-full">
              <div className="">
                <p className="text-3xl font-semibold">Card Heading</p>
                <p className="mt-3">
                  Welcome message and introduction to your IT company{" "}
                </p>
                <p className=" text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tenetur minus, unde qui aliquam temporibus ullam id
                  cupiditate, nemo placeat maxime nobis tempore consectetur
                  quaerat consequatur necessitatibus a nulla voluptas delectus!
                </p>
              </div>
            </div>
            <div className="w-full">
              <a href="https://ibb.co/TwTszRH">
                <img
                  className="w-full h-80 rounded-lg border-2 object-cover"
                  src="https://i.ibb.co/x2sNVGM/pexels-orhan-badur-253753151-17113025.jpg"
                  alt="pexels-orhan-badur-253753151-17113025"
                />
              </a>
            </div>
          </div>
        </div>
      </UpAnimation>
    </>
  );
}

export default HomePage;
