import DashboardIcon from "@mui/icons-material/Dashboard";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import Ui from "../../assets/images/istockphoto-1189378904-1024x1024.jpg";
import bgimg from "../../assets/images/18220884_v1016-b-09.jpg";
import GridImg1 from "../../assets/images/2151336616.jpg";
import GridImg2 from "../../assets/images/istockphoto-1217882746-612x612.jpg";
import GridImg3 from "../../assets/images/2151336506.jpg";
import GridImg4 from "../../assets/images/2151336507.jpg";
function HomePage() {
  return (
    <>
      {" "}
      <div className=" absolute h-full w-full -z-50">
        <img src={bgimg} alt="" className="w-full h-screen" />
      </div>
      <div className="contaner m-auto ">
        <div className="h-screen flex items-center justify-center">
          <div>
            <p className=" text-5xl lg:text-8xl text-center font-semibold font-Oswald text-white uppercase">
              NeuralRoot
            </p>
            <p className=" text-transparent font-bold text-sm lg:text-xl font-OpenSans  w-2/3 text-center container m-auto bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 bg-clip-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            </p>
          </div>
        </div>
      </div>
      {/* description */}
      <div className=" container m-auto space-y-6 lg:space-y-0 lg:flex justify-between px-6 lg:px-24 gap-12 mt-12 lg:mt-48">
        <div className="w-full">
          <p className="lg:text-3xl text-lg font-bold capitalize text-white">
            Let's Get Started!
          </p>
          <p className="text-gray-500 text-base lg:text-lg">
            Ready to take your online presence to the next level? Get in touch
            with us today to discuss your project requirements and discover how
            we can help you achieve your digital goals. Whether you're starting
            from scratch or looking to revamp your existing website, we're here
            to turn your vision into reality.
          </p>
        </div>
        <div className="w-full">
          <p className="lg:text-3xl text-lgfont-bold capitalize text-white">
            Description
          </p>
          <p className="text-gray-500 text-base lg:text-lg ">
            At NeuralRoots, we specialize in turning your digital dreams into
            reality. Our team of expert designers, developers, and digital
            strategists work tirelessly to create captivating websites that not
            only look stunning but also drive results for your business.
          </p>{" "}
          <div className=" flex text-white space-x-8 py-6">
            <DashboardIcon sx={{ fontSize: 40 }} />

            <AcUnitIcon sx={{ fontSize: 40 }} />
            <AccountBalanceWalletIcon sx={{ fontSize: 40 }} />
          </div>
        </div>
      </div>
      <div className="container m-auto px-6 lg:px-24 mt-12 lg:mt-48 ">
        <p className=" text-white text-5xl text-center font-Oswald font-medium uppercase tracking-wider">
          Our services
        </p>
      </div>
      <div className=" container m-auto px-6 lg:px-24 mt-8">
        <div className="border border-cinder-900 shadow p-4 lg:p-10 rounded-2xl">
          <div className="flex gap-3 items-center">
            <div className="text-purple-500 ">
              <ArchitectureIcon sx={{ fontSize: 60 }} />
            </div>
            <div className="text-transparent uppercase font-bold text-4xl font-Oswald bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 bg-clip-text">
              Design
            </div>
          </div>
          <div className=" ">
            <div className="text-white w-full">
              <ul className="mt-5 text-base lg:text-lg flex space-x-2 lg:space-x-12">
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
            <div className="w-full mt-5">
              <img src={Ui} alt="" className=" rounded-xl w-full h-96 " />
            </div>
          </div>
        </div>
      </div>
      <div className="container m-auto px-24 mt-12 ">
        <p className=" text-white text-5xl text-center font-Oswald font-medium uppercase tracking-wider">
          lorem{" "}
        </p>
      </div>
      <div className="container m-auto px-24 mt-8 ">
        <div className="border border-cinder-900 shadow p-10 rounded-2xl ">
          <div className="grid grid-cols-4 grid-rows-3 gap-8">
            <div className=" rounded-lg col-span-2 bg-cinder-600">
              <img
                src={GridImg1}
                alt=""
                className="rounded-lg  object-cover w-full h-72"
              />
            </div>
            <div className=" rounded-lg bg-cinder-600">
              <img
                src={GridImg2}
                alt=""
                className="rounded-lg  object-cover w-full h-72"
              />
            </div>
            <div className=" rounded-lg row-span-2 bg-cinder-600">
              <img
                src={GridImg3}
                alt=""
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className=" rounded-lg row-span-2 bg-cinder-500">
              <img
                src={GridImg3}
                alt=""
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className=" rounded-lg col-span-2  bg-cinder-400">
              {" "}
              <img
                src={GridImg1}
                alt=""
                className="rounded-lg  object-cover w-full h-72"
              />
            </div>
            <div className=" rounded-lg  bg-red-600">
              <div className=" rounded-lg bg-cinder-600">
                <img
                  src={GridImg2}
                  alt=""
                  className="rounded-lg  object-cover w-full h-72"
                />
              </div>
            </div>
            <div className=" rounded-lg col-span-2 bg-red-400">
              <img
                src={GridImg4}
                alt=""
                className="rounded-lg  object-cover w-full h-72"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full   relative  mt-12">
        <img src={Ui} className=" absolute  w-full h-full -z-50" alt="" />
        <div className="flex justify-between p-24">
          <div className=" container m-auto px-24">
            <p className="text-xl font-Oswald text-white">heading </p>
            <ul className=" space-y-12 text-white font-OpenSans text-4xl">
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
