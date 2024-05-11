import DashboardIcon from "@mui/icons-material/Dashboard";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import GridImg1 from "../../assets/images/2151336616.jpg";
import GridImg2 from "../../assets/images/istockphoto-1217882746-612x612.jpg";
import GridImg3 from "../../assets/images/2151336506.jpg";
import GridImg4 from "../../assets/images/2151336507.jpg";
import UpAnimation from "../animations/UpAnimation";
import OurServicesContainer from "../common/OurServicesContainer";
import { BackgroundGradient } from "../animations/BackgroundGradient";
import HeroBackgroundImage from "../../assets/images/15442885_5611294.png";
import MobileHeroImage from "../../assets/images/Untitled-1.png";
import ApiIcon from "@mui/icons-material/Api";
import GlowIconContainer from "../common/GlowIconContainer";
function HomePage() {
  return (
    <>
      <div className="absolute -z-50 hidden lg:block">
        <img src={HeroBackgroundImage} alt="" className="h-screen w-screen" />
      </div>
      <div className="visible absolute -z-50 lg:hidden ">
        <img src={MobileHeroImage} alt="" className="h-screen w-screen" />
      </div>

      <div className="contaner m-auto px-4 lg:px-24 ">
        <div className=" flex h-screen items-center justify-center gap-4">
          <div className=" h-36 w-1 rounded bg-violet-500">.</div>
          <div className="">
            <UpAnimation className="">
              <div>
                <p className=" font-Oswald text-4xl font-medium uppercase tracking-wider text-white lg:text-7xl">
                  Planting Seeds of <br />
                  <span className="bg-gradient-to-r from-violet-500 via-blue-400 to-blue-400 bg-clip-text text-transparent">
                    Innovation
                  </span>
                </p>
                <p className="mt- container mt-2 w-full font-OpenSans text-sm text-white lg:w-2/3 lg:text-xl">
                  At NeuralRoots, we specialize in turning your digital dreams
                  into reality. Our team of expert designers, developers, and
                  digital strategists work tirelessly to create captivating
                  websites that not only look stunning but also drive results
                  for your business.
                </p>
                <div className=" container mt-8 w-44">
                  <BackgroundGradient className=" text-center">
                    <div className="rounded-lg bg-cinder-950 py-4 text-white">
                      Connect Use
                    </div>
                  </BackgroundGradient>
                </div>
              </div>
            </UpAnimation>
          </div>
        </div>
      </div>
      <UpAnimation className="">
        <div>
          <div className=" container m-auto mt-8 flex bg-transparent px-12 font-Oswald text-4xl font-semibold capitalize text-white  lg:px-24">
            <GlowIconContainer
              iconColor="text-violet-500"
              bgcolor="bg-violet-500"
              materialIcon={<ApiIcon />}
            />
            Our services
          </div>
          <div className="mt-8">
            <OurServicesContainer />
          </div>
        </div>
      </UpAnimation>

      {/* description */}
      <UpAnimation>
        <div className=" container m-auto mt-12 justify-between  gap-12 space-y-6 px-6 lg:mt-8 lg:flex lg:space-y-0 lg:px-24">
          <div className="w-full">
            <p className="font-Oswald text-lg font-bold capitalize text-white lg:text-3xl">
              Let's Get Started!
            </p>
            <p className="font-OpenSans text-base text-gray-500 lg:text-lg">
              Ready to take your online presence to the next level? Get in touch
              with us today to discuss your project requirements and discover
              how we can help you achieve your digital goals. Whether you're
              starting from scratch or looking to revamp your existing website,
              we're here to turn your vision into reality.
            </p>
          </div>
          <div className="w-full">
            <p className="font-Oswald text-lg font-bold capitalize text-white lg:text-3xl">
              Description
            </p>
            <p className="font-OpenSans text-base text-gray-500 lg:text-lg">
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
      </UpAnimation>
      <div className="container m-auto mt-8 px-24 ">
        <p className=" text-center font-Oswald text-5xl font-medium uppercase tracking-wider text-white">
          lorem{" "}
        </p>
      </div>
      <div className="container m-auto mt-8 px-5 lg:px-24 ">
        <div className="rounded-2xl border border-cinder-900 p-10  ">
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
    </>
  );
}

export default HomePage;
