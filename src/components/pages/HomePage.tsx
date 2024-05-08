import DashboardIcon from "@mui/icons-material/Dashboard";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import Ui from "../../assets/images/istockphoto-1189378904-1024x1024.jpg";
// import bgimg from "../../assets/images/18220884_v1016-b-09.jpg";
import GridImg1 from "../../assets/images/2151336616.jpg";
import GridImg2 from "../../assets/images/istockphoto-1217882746-612x612.jpg";
import GridImg3 from "../../assets/images/2151336506.jpg";
import GridImg4 from "../../assets/images/2151336507.jpg";
import { TextGenerateEffect } from "../animations/TextGenerateEffect";
function HomePage() {
  return (
    <>
      {" "}
      {/* <div className=" absolute -z-50 h-full w-full">
        <img src={bgimg} alt="" className="h-screen w-full" />
      </div> */}
      <div className="contaner m-auto ">
        <div className="flex h-screen items-center justify-center">
          <div>
            <p className=" m-4 text-center font-Oswald text-5xl font-semibold uppercase text-white lg:text-8xl">
              Neural<span className="text-violet-600">Root</span>
            </p>
            <p className=" ext-center container m-auto  w-2/3 text-center font-OpenSans text-sm font-bold text-white  lg:text-4xl">
              <TextGenerateEffect words="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam" />
            </p>
            <div className=" text-center">
              <button className=" mt-5 rounded-lg bg-cinder-950 px-6 py-4 font-bold uppercase text-white ring-1 ring-cinder-500">
                Connect Use
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* description */}
      <div className=" container m-auto mt-12 justify-between gap-12 space-y-6 px-6 lg:mt-48 lg:flex lg:space-y-0 lg:px-24">
        <div className="w-full">
          <p className="text-lg font-bold capitalize text-white lg:text-3xl">
            Let's Get Started!
          </p>
          <p className="text-base text-gray-500 lg:text-lg">
            Ready to take your online presence to the next level? Get in touch
            with us today to discuss your project requirements and discover how
            we can help you achieve your digital goals. Whether you're starting
            from scratch or looking to revamp your existing website, we're here
            to turn your vision into reality.
          </p>
        </div>
        <div className="w-full">
          <p className="text-lgfont-bold capitalize text-white lg:text-3xl">
            Description
          </p>
          <p className="text-base text-gray-500 lg:text-lg ">
            At NeuralRoots, we specialize in turning your digital dreams into
            reality. Our team of expert designers, developers, and digital
            strategists work tirelessly to create captivating websites that not
            only look stunning but also drive results for your business.
          </p>{" "}
          <div className=" flex space-x-8 py-6 text-white">
            <DashboardIcon sx={{ fontSize: 40 }} />
            <AcUnitIcon sx={{ fontSize: 40 }} />
            <AccountBalanceWalletIcon sx={{ fontSize: 40 }} />
          </div>
        </div>
      </div>
      <div className="container m-auto mt-12 px-6 lg:mt-48 lg:px-24 ">
        <p className=" text-center font-Oswald text-5xl font-medium uppercase tracking-wider text-white">
          Our services
        </p>
      </div>
      <div className=" container m-auto mt-8 px-6 lg:px-24">
        <div className="rounded-2xl border border-cinder-900 p-4 shadow lg:p-10">
          <div className="flex items-center gap-3">
            <div className="text-purple-500 ">
              <ArchitectureIcon sx={{ fontSize: 60 }} />
            </div>
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 bg-clip-text font-Oswald text-4xl font-bold uppercase text-transparent">
              Design
            </div>
          </div>
          <div className=" ">
            <div className="w-full text-white">
              <ul className="mt-5 flex space-x-2 text-base lg:space-x-6 lg:text-lg">
                <li>
                  <p className="text-2xl">UI / UX</p>
                </li>
                <li>
                  <p className="text-2xl">Web Design</p>
                </li>
                <li>
                  <p className="text-2xl">App</p>
                </li>
              </ul>
              <div className=" mt-5 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita non amet ad consequatur enim deleniti mollitia
                voluptatum aut, repellendus quod, cumque delectus eos adipisci
                inventore rerum laudantium rem natus temporibus.
              </div>
            </div>
            <div className="mt-5 w-full">
              <img src={Ui} alt="" className=" h-96 w-full rounded-xl " />
            </div>
          </div>
        </div>
      </div>
      <div className="container m-auto mt-12 px-24 ">
        <p className=" text-center font-Oswald text-5xl font-medium uppercase tracking-wider text-white">
          lorem{" "}
        </p>
      </div>
      <div className="container m-auto mt-8 px-24 ">
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
        <img src={Ui} className=" absolute  -z-50 h-full w-full" alt="" />
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
