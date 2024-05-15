import AcUnitIcon from "@mui/icons-material/AcUnit";
import UpAnimation from "../animations/UpAnimation";
import { BackgroundGradient } from "../animations/BackgroundGradient";
import { TracingBeam } from "../animations/TracingBeam";
import GlowIconContainer from "../common/GlowIconContainer";
import OurServicesContainer from "../common/OurServicesContainer";
import UiUxImg from "../../assets/images/16829080_5741168.jpg";

// icons
import BrushIcon from "@mui/icons-material/Brush";
function HomePage() {
  return (
    <>
      <TracingBeam>
        <div className=" container absolute left-20 top-0 -z-20 h-96 w-10 bg-white    ">
          .
        </div>
        <div className="contaner m-auto px-4 lg:px-24 ">
          <div className=" relative flex h-screen items-center justify-center gap-4">
            <div className=" absolute -left-[21px] top-48">
              <GlowIconContainer materialIcon={<AcUnitIcon />} />
            </div>

            <div className="absolute left-0 top-60 h-52 w-[4.2px] bg-violet-500">
              .
            </div>
            <div className="pl-12">
              <UpAnimation className="">
                <div>
                  <p className="   text-4xl font-medium uppercase tracking-wider  lg:text-7xl">
                    Planting Seeds of <br />
                    <span className="bg-gradient-to-r from-violet-500 via-blue-400 to-blue-400 bg-clip-text text-transparent">
                      Innovation
                    </span>
                  </p>
                  <p className="mt- container mt-2 w-full   text-sm lg:w-2/3 lg:text-xl">
                    At NeuralRoots, we specialize in turning your digital dreams
                    into reality. Our team of expert designers, developers, and
                    digital strategists work tirelessly to create captivating
                    websites that not only look stunning but also drive results
                    for your business.
                  </p>
                  <div className=" container mt-8 w-44">
                    <BackgroundGradient className=" text-center">
                      <div className="rounded-lg  py-4 text-white">
                        Connect Use
                      </div>
                    </BackgroundGradient>
                  </div>
                </div>
              </UpAnimation>
            </div>
          </div>
        </div>

        {/* Our services */}
        <OurServicesContainer />
        {/* description */}

        <div className="container m-auto mt-36 px-24">
          <div className=" flex justify-between gap-10 rounded-3xl">
            <div className="w-1/2 ">
              <div className="flex">
                <div className="w-6/12">
                  <p className="  text-6xl font-medium tracking-wider  ">
                    UI/UX <br />
                    Design
                  </p>
                </div>
                <div className=" relative">
                  <div className=" absolute left-6 top-0">
                    <GlowIconContainer materialIcon={<BrushIcon />} />
                  </div>
                  <div className=" absolute left-32 top-7">
                    <GlowIconContainer materialIcon={<BrushIcon />} />
                  </div>
                </div>
              </div>
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
                  className="mt-12 h-48 w-full rounded-xl"
                />
              </div>
            </div>
            <div className="w-1/2">
              <img src={UiUxImg} alt="" className="h-full w-full rounded-3xl" />
            </div>
          </div>
        </div>

        {/* <UpAnimation>
          <div className="container m-auto mt-8 px-20 ">
            <div className="flex ">
              <div>
                <p className=" bg-cinder-950  text-5xl font-medium uppercase tracking-wider text-white">
                  Our services
                </p>{" "}
                <div className=" bg-cinder-950 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, fuga.
                </div>
              </div>
            </div>

            <div className="">
              <div className=" mt-4 flex justify-between gap-3">
                <div className="w-8/12 rounded-2xl bg-gray-800 text-white ">
                  <div className="flex">
                    <div>
                      <div className="border-b border-gray-500 p-8">
                        {" "}
                        <p className="text-6xl tracking-wider">
                          CodeCraft
                          <br /> Creations
                        </p>
                        <p className="text-gray-500">
                          Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </p>
                      </div>
                      <div className="p-8">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Cum ipsum fuga omnis quidem dolorem quam odio
                        adipisci,
                      </div>
                    </div>
                    <div className="border-l border-gray-500">
                      <div>
                        <img
                          src={OurServiceImg}
                          alt=""
                          className="rounded-se-2xl"
                        />
                      </div>
                      <div className="p-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime
                      </div>
                    </div>
                  </div>
                </div>
                <div className="  w-4/12 rounded-2xl bg-gray-800 p-8 text-white">
                  <div className="group relative flex h-56 w-96 flex-col items-start justify-start gap-2 rounded-lg bg-gray-900 p-4 shadow-gray-800 duration-500 hover:-translate-y-2 hover:shadow-xl">
                    <div className="absolute -bottom-10 -right-20 h-1/2 w-80 rounded-lg bg-gray-800 shadow-md duration-700 group-hover:-translate-x-4 group-hover:-translate-y-4">
                      <aside className="w-full max-w-lg rounded-lg border border-gray-500 bg-gray-900 p-6 font-mono text-white">
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-2 text-red-500">
                            <div className="h-3 w-3 rounded-full bg-red-500"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                          </div>
                          <p className="text-sm">bash</p>
                        </div>
                        <div className="mt-4">
                          <p className="text-green-400">$ npm install next</p>
                          <p className="text-white">+ next@10.2.3</p>
                          <p className="text-white">
                            added 1 package, and audited 2 packages in 3s
                          </p>
                          <p className="text-green-400">$</p>
                        </div>
                      </aside>
                    </div>

                    <div className="">
                      <h2 className="mb-2 text-2xl font-bold text-gray-100">
                        Dark Card
                      </h2>
                      <p className="line-clamp-3 text-gray-200">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean convallis magna quis lectus fermentum, quis
                        scelerisque orci pellentesque. Duis id porta justo. Sed
                        ac enim id justo tincidunt hendrerit id ac lectus.
                        Pellentesque maximus posuere tortor vitae consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" mt-3 flex w-full justify-between rounded-2xl bg-gray-800 p-12">
                <div className="w-6/12">
                  <p className=" text-6xl font-medium tracking-wider text-white">
                    Web Application Services
                  </p>
                  <p className="text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laborum, blanditiis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </UpAnimation> */}
      </TracingBeam>
    </>
  );
}

export default HomePage;
