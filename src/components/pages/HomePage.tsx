import UpAnimation from "../animations/UpAnimation";
import { TracingBeam } from "../animations/TracingBeam";
import UiUxImg from "../../assets/images/16829080_5741168.jpg";

// icons
// import BrushIcon from "@mui/icons-material/Brush";
function HomePage() {
  return (
    <>
      <TracingBeam>
        <div className=" container absolute left-24 top-0 -z-20 h-96 w-10 bg-white    ">
          .
        </div>
        <div className="contaner m-auto px-8 xl:px-24 ">
          <div className="  flex justify-center gap-4 pt-28 sm:h-screen sm:items-center sm:pt-0">
            <div className=" ">
              <UpAnimation className="">
                <p className="text-4xl font-semibold uppercase tracking-wide sm:text-6xl  md:text-6xl lg:text-7xl xl:text-8xl">
                  Planting Seeds of <br />
                  <span className="bg-gradient-to-r from-violet-500 via-blue-400 to-blue-400 bg-clip-text text-transparent">
                    Innovation
                  </span>
                </p>
                <p className="container mt-2 w-full text-sm lg:w-2/3 lg:text-xl">
                  At NeuralRoots, we specialize in turning your digital dreams
                  into reality. Our team of expert designers, developers, and
                  digital strategists work tirelessly to create captivating
                  websites that not only look stunning but also drive results
                  for your business.
                </p>
                <div className=" container m-auto mt-8 w-44 sm:m-0 sm:mt-8">
                  <div className="rounded-lg  bg-black py-4  text-center text-white shadow-xl shadow-violet-500 ring-2  ring-violet-500">
                    Connect Use
                  </div>
                </div>
              </UpAnimation>
            </div>
          </div>
        </div>

        {/* Our services */}
        {/* <OurServicesContainer /> */}
        {/* description */}

        <div className="contaner m-auto mt-32 px-8 xl:px-24 ">
          <div className="justify-between gap-10 rounded-3xl sm:flex">
            <div className="sm:w-1/2 ">
              <p className="text-center text-4xl font-medium  tracking-wider sm:text-left sm:text-6xl  ">
                UI/UX Design
              </p>

              <div className="mt-12 flex items-center">
                <div className="w-56">We Provide</div>
                <div className=" h-1 w-full bg-cinder-600">.</div>
              </div>

              <p className="mt-4">
                We prioritize user experience at every step of the design
                process, ensuring that your website not only looks great but
                also delivers an intuitive and delightful experience for your
                visitors.
              </p>
              <div className="">
                <img
                  src={UiUxImg}
                  alt=""
                  className=" mt-12 h-48 w-full rounded-xl"
                />
              </div>
            </div>
            <div className="sm:w-1/2 ">
              <img src={UiUxImg} alt="" className="h-full w-full rounded-3xl" />
            </div>
          </div>
        </div>

        <div className="contaner m-auto mt-12 px-8 xl:px-24">
          <div className=" relative flex justify-between rounded-3xl bg-gradient-to-r from-black from-75%  to-transparent text-white">
            <div className="p-8">
              <div className=" text-4xl ">Web Application</div>
              <div className=" text-3xl text-violet-600  ">
                Rooted in Innovation, Branching into Tomorrow
              </div>
              <div className=" mt-4">
                Extend your digital reach with our mobile app development
                services. From iOS to Android, we create native and
                cross-platform apps that elevate your brand and engage your
                audience on the go.
              </div>
            </div>
            <div>
              <img
                src={UiUxImg}
                alt=""
                className="absolute right-0 -z-10 h-full w-1/4 rounded-e-3xl"
              />
            </div>
          </div>
        </div>
        <div className="contaner m-auto mt-12 px-8 xl:px-24">
          <div className=" relative flex justify-between rounded-3xl bg-gradient-to-r from-black from-75%  to-transparent text-white">
            <div className="p-8">
              <div className=" text-4xl ">Mobile Application</div>
              <div className=" text-3xl text-violet-600  ">
                Rooted in Innovation, Branching into Tomorrow
              </div>
              <div className=" mt-4">
                Extend your digital reach with our mobile app development
                services. From iOS to Android, we create native and
                cross-platform apps that elevate your brand and engage your
                audience on the go.
              </div>
            </div>
            <div>
              <img
                src={UiUxImg}
                alt=""
                className="absolute right-0 -z-10 h-full w-1/4 rounded-e-3xl"
              />
            </div>
          </div>
        </div>
        <div className=" container m-auto mt-12 px-24 ">
          <p className=" bg-gradient-to-r from-violet-500 via-blue-400 to-blue-400 bg-clip-text text-center text-8xl font-semibold text-transparent">
            lorem loreem
          </p>
        </div>
      </TracingBeam>
    </>
  );
}

export default HomePage;
