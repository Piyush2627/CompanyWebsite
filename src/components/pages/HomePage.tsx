import UpAnimation from "../animations/UpAnimation";
import UiUxImg from "../../assets/images/16829080_5741168.jpg";
import LineAnimation from "../animations/LineAnimation";
import GlowIconContainer from "../common/GlowIconContainer";
import EarbudsIcon from "@mui/icons-material/Earbuds";
function HomePage() {
  return (
    <>
      <div className="absolute left-0 -z-40 h-screen w-full bg-gradient-to-r from-black from-60% to-transparent"></div>
      <div className="absolute left-0 -z-40 h-screen w-full bg-gradient-to-t from-cinder-950 from-10% to-transparent"></div>
      <div className="   px-36">
        <img
          src={UiUxImg}
          className="absolute left-0 -z-50 h-screen w-screen"
          alt=""
        />
        <div className="flex h-screen justify-center gap-4 pt-28 sm:items-center sm:pt-0">
          <div>
            <UpAnimation delay={0.2} className="">
              <p className="text-center text-4xl font-semibold uppercase tracking-wide text-black sm:text-left  sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl dark:text-white">
                Planting Seeds of <br />
                <span className="bg-gradient-to-r from-violet-500 via-blue-400 to-blue-400 bg-clip-text text-transparent">
                  Innovation
                </span>
              </p>
            </UpAnimation>
            <UpAnimation delay={0.4}>
              <p className=" mt-2 w-full text-center text-sm text-black sm:text-left lg:w-2/3 lg:text-xl dark:text-white">
                At NeuralRoots, we specialize in turning your digital dreams
                into reality. Our team of expert designers, developers, and
                digital strategists work tirelessly to create captivating
                websites that not only look stunning but also drive results for
                your business.
              </p>
            </UpAnimation>
            <UpAnimation delay={0.6}>
              <div className="  m-auto mt-8 w-44 sm:m-0  sm:mt-8">
                <div className="rounded-lg  bg-black py-4  text-center text-white shadow-xl shadow-violet-500 ring-2  ring-violet-500">
                  Connect Use
                </div>
              </div>
            </UpAnimation>
          </div>
        </div>
      </div>

      <div className=" container relative m-auto p-16 px-12">
        <div className=" absolute -left-6 -top-5 bg-cinder-950">
          <GlowIconContainer materialIcon={<EarbudsIcon />} />
        </div>
        <div className=" absolute left-0 top-6 -z-50">
          <LineAnimation
            delay={0}
            height={320}
            tailwindBackgroundColor="bg-cinder-950"
            beamcolor="bg-gradient-to-b from-violet-500 via-blue-400 to-transparent"
          />
        </div>
        <div className=" absolute -left-6 top-80 bg-cinder-950">
          <GlowIconContainer materialIcon={<EarbudsIcon />} />
        </div>
        <div className=" absolute left-0 top-[340px] -z-50">
          <LineAnimation
            delay={0}
            height={600}
            tailwindBackgroundColor="bg-cinder-950"
            beamcolor="bg-gradient-to-b from-blue-500 via-violet-500 to-transparent"
          />
        </div>
        <div className="justify-center gap-10 rounded-3xl sm:flex">
          <div className="flex-col sm:w-1/2">
            <p className="text-center text-4xl font-medium  tracking-wider  sm:text-left sm:text-6xl  dark:text-white">
              UI/UX Design
            </p>

            <div className="mt-12 flex items-center">
              <div className="backdrop: w-56 dark:text-white">We Provide</div>
              <div className=" h-1 w-full bg-cinder-600">.</div>
            </div>

            <p className="mt-4 dark:text-white">
              We prioritize user experience at every step of the design process,
              ensuring that your website not only looks great but also delivers
              an intuitive and delightful experience for your visitors.
            </p>
            <div className="">
              <img
                src={UiUxImg}
                alt=""
                className=" mt-12 w-full flex-grow rounded-xl"
              />
            </div>
          </div>
          <div className="sm:w-1/2 ">
            <img src={UiUxImg} alt="" className="h-full w-full rounded-3xl" />
          </div>
        </div>
      </div>

      <div className="contaner m-auto mt-12 px-8 ">
        <div className=" relative flex justify-between rounded-3xl bg-gradient-to-r from-black from-75%  to-transparent text-white">
          <div className="p-8">
            <div className=" text-4xl ">Web Application</div>
            <div className=" text-3xl text-violet-600  ">
              Rooted in Innovation, Branching into Tomorrow
            </div>
            <div className=" mt-4">
              Extend your digital reach with our mobile app development
              services. From iOS to Android, we create native and cross-platform
              apps that elevate your brand and engage your audience on the go.
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
      <div className="contaner m-auto mt-12 px-8 ">
        <div className=" relative flex justify-between rounded-3xl bg-gradient-to-r from-black from-75%  to-transparent text-white">
          <div className="p-8">
            <div className=" text-4xl ">Mobile Application</div>
            <div className=" text-3xl text-violet-600  ">
              Rooted in Innovation, Branching into Tomorrow
            </div>
            <div className=" mt-4">
              Extend your digital reach with our mobile app development
              services. From iOS to Android, we create native and cross-platform
              apps that elevate your brand and engage your audience on the go.
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
    </>
  );
}

export default HomePage;
