import DashboardIcon from "@mui/icons-material/Dashboard";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import Grid from "../../assets/images/18220884_v1016-b-09.jpg";
function HomePage() {
  return (
    <>
      {" "}
      {/* hero Section */}
      <div className="flex justify-center">
        <img
          src={Grid}
          alt=""
          className=" absolute  -z-50 opacity-65 h-screen w-screen  "
        />
      </div>
      <div className="contaner m-auto ">
        <div className="h-screen flex items-center justify-center">
          <div>
            <p className=" text-8xl   text-center font-semibold font-Oswald text-white uppercase">
              NeuralRoot
            </p>
            <p className=" text-transparent font-bold text-xl font-OpenSans  w-2/3 text-center container m-auto bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 bg-clip-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            </p>
          </div>
        </div>
      </div>
      {/* description */}
      <div className=" container m-auto flex justify-between px-24 gap-12 mt-48">
        <div className="w-full">
          <p className="text-3xl font-bold capitalize text-white">
            Let's Get Started!
          </p>
          <p className="text-white font-OpenSans">
            Ready to take your online presence to the next level? Get in touch
            with us today to discuss your project requirements and discover how
            we can help you achieve your digital goals. Whether you're starting
            from scratch or looking to revamp your existing website, we're here
            to turn your vision into reality.
          </p>
        </div>
        <div className="w-full">
          <p className="text-3xl font-bold capitalize text-white">
            Description
          </p>
          <p className="text-white font-OpenSans">
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
      <div className="container m-auto px-24 mt-48 ">
        <p className=" text-white text-5xl text-center font-Oswald font-medium uppercase tracking-wider">
          Our services
        </p>
      </div>
      <div className=" container m-auto px-24 mt-8">
        <div className="border border-cinder-900 shadow p-5 rounded-2xl h-[300px]">
          <div className="flex gap-3 items-center">
            <div className="text-white ">
              <ArchitectureIcon sx={{ fontSize: 40 }} />
            </div>
            <div className="text-white font-Oswald tracking-widest text-4xl">
              Design
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-white w-full">
              <ul className=" ">
                <li>
                  <p className="text-2xl">UI / UX</p>
                  <p className=" ml-10">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Adipisci quasi, fuga quo esse distinctio itaque? Ipsam
                    magnam debitis doloribus maxime reiciendis, soluta autem
                    nihil quos harum veniam repellendus iste totam?
                  </p>
                </li>
                <li>Web Design</li>
                <li>App Design</li>
              </ul>
            </div>
            <div className="w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
