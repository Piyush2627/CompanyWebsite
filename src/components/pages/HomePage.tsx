import DashboardIcon from "@mui/icons-material/Dashboard";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import GridImg1 from "../../assets/images/2151336616.jpg";
import GridImg2 from "../../assets/images/istockphoto-1217882746-612x612.jpg";
import GridImg3 from "../../assets/images/2151336506.jpg";
import GridImg4 from "../../assets/images/2151336507.jpg";
import { TextGenerateEffect } from "../animations/TextGenerateEffect";
import UpAnimation from "../animations/UpAnimation";
import LeftAnimation from "../animations/LeftAnimation";
import OurServicesContainer from "../common/OurServicesContainer";
function HomePage() {
  return (
    <>
      <div className="contaner m-auto ">
        <div className="flex h-screen items-center justify-center">
          <div>
            <UpAnimation className="">
              <p className=" m-4 text-center font-Oswald text-5xl font-semibold uppercase text-white lg:text-8xl">
                Neural<span className="text-violet-600">Root</span>
              </p>
            </UpAnimation>
            <TextGenerateEffect
              className="text-center font-OpenSans text-4xl text-white"
              words="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam"
            />

            <div className=" text-center">
              <button className=" mt-5 rounded-lg bg-cinder-950 px-6 py-4 font-bold uppercase text-white ring-1 ring-cinder-500">
                Connect Use
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" container m-auto px-12 text-center font-Oswald text-4xl font-bold capitalize text-white lg:px-24">
        Our services
      </div>
      <div className="mt-8">
        <OurServicesContainer />
      </div>
      {/* description */}
      <LeftAnimation>
        <div className=" container m-auto mt-12 justify-between gap-12 space-y-6 px-6 lg:mt-8 lg:flex lg:space-y-0 lg:px-24">
          <div className="w-full">
            <p className="text-lg font-bold capitalize text-white lg:text-3xl">
              Let's Get Started!
            </p>
            <p className="text-base text-gray-500 lg:text-lg">
              Ready to take your online presence to the next level? Get in touch
              with us today to discuss your project requirements and discover
              how we can help you achieve your digital goals. Whether you're
              starting from scratch or looking to revamp your existing website,
              we're here to turn your vision into reality.
            </p>
          </div>
          <div className="w-full">
            <p className="text-lgfont-bold capitalize text-white lg:text-3xl">
              Description
            </p>
            <p className="text-base text-gray-500 lg:text-lg ">
              At NeuralRoots, we specialize in turning your digital dreams into
              reality. Our team of expert designers, developers, and digital
              strategists work tirelessly to create captivating websites that
              not only look stunning but also drive results for your business.
            </p>{" "}
            <div className=" flex space-x-8 py-6 text-white">
              <DashboardIcon sx={{ fontSize: 40 }} />
              <AcUnitIcon sx={{ fontSize: 40 }} />
              <AccountBalanceWalletIcon sx={{ fontSize: 40 }} />
            </div>
          </div>
        </div>
      </LeftAnimation>
      <div className="container m-auto mt-8 px-24 ">
        <p className=" text-center font-Oswald text-5xl font-medium uppercase tracking-wider text-white">
          lorem{" "}
        </p>
      </div>
      <div className="container m-auto mt-8 px-5 lg:px-24 ">
        <div className="rounded-2xl border border-cinder-900 p-10 shadow ">
          <div className="grid grid-cols-4 grid-rows-3 gap-8">
            <div className=" col-span-2 rounded-lg bg-cinder-600">
              <img
                src={GridImg1}
                alt=""
                className="h-72  w-full rounded-lg object-cover"
              />
            </div>
            <div className=" rounded-lg bg-cinder-600">
              <img
                src={GridImg2}
                alt=""
                className="h-72  w-full rounded-lg object-cover"
              />
            </div>
            <div className=" row-span-2 rounded-lg bg-cinder-600">
              <img
                src={GridImg3}
                alt=""
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className=" row-span-2 rounded-lg bg-cinder-500">
              <img
                src={GridImg3}
                alt=""
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className=" col-span-2 rounded-lg  bg-cinder-400">
              {" "}
              <img
                src={GridImg1}
                alt=""
                className="h-72  w-full rounded-lg object-cover"
              />
            </div>
            <div className=" rounded-lg  bg-red-600">
              <div className=" rounded-lg bg-cinder-600">
                <img
                  src={GridImg2}
                  alt=""
                  className="h-72  w-full rounded-lg object-cover"
                />
              </div>
            </div>
            <div className=" col-span-2 rounded-lg bg-red-400">
              <img
                src={GridImg4}
                alt=""
                className="h-72  w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative   mt-12  w-full">
        <img src={GridImg1} className=" absolute  -z-50 h-full w-full" alt="" />
        <div className="flex justify-between p-24">
          <div className=" container m-auto px-24">
            <p className="font-Oswald text-xl text-white">heading </p>
            <ul className=" space-y-12 font-OpenSans text-4xl text-white">
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default HomePage;
