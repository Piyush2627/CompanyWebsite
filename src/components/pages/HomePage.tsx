import UpAnimation from "../animations/UpAnimation";
import TopGlowImage from "../../assets/coreassets/glow-top.svg";
import { Button } from "../animations/MovingBorder";
import LineAnimation from "../animations/LineAnimation";
import GlowIconContainer from "../common/GlowIconContainer";
// images
import FeatureImage from "../../assets/coreassets/feature-image-01.png";
import IntegrationImage from "../../assets/coreassets/integration-image.png";
import FeatureImage2 from "../../assets/coreassets/feature-image-02.png";
// icons
import CodeIcon from "@mui/icons-material/Code";

function HomePage() {
  return (
    <>
      <div className=" container m-auto flex h-screen justify-center gap-4 px-24 pt-28 sm:items-center sm:pt-0">
        <img
          src={TopGlowImage}
          className="container absolute left-0 top-0 -z-50 m-auto h-auto rounded-3xl "
          style={{ borderRadius: "86px" }}
          alt=""
        />
        <div>
          <UpAnimation delay={0.2} className="">
            <p className="text-center text-4xl font-semibold uppercase tracking-wide text-black sm:text-left  sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl dark:text-white">
              Planting Seeds of <br />
              <span className="bg-gradient-to-r from-amethyst-500 via-amethyst-100 to-amethyst-100 bg-clip-text text-transparent">
                Innovation
              </span>
            </p>
          </UpAnimation>
          <UpAnimation delay={0.4}>
            <p className=" mt-2 w-full text-center text-sm text-black sm:text-left lg:w-2/3 lg:text-xl dark:text-white">
              At NeuralRoots, we specialize in turning your digital dreams into
              reality. Our team of expert designers, developers, and digital
              strategists work tirelessly to create captivating websites that
              not only look stunning but also drive results for your business.
            </p>
          </UpAnimation>
          <UpAnimation delay={0.6}>
            <div className="  m-auto mt-8 w-36 sm:m-0  sm:mt-8">
              <div className="rounded-lg  bg-black py-2 text-center  text-sm text-white shadow-md shadow-violet-500 ring-1  ring-violet-500">
                Connect Use
              </div>
            </div>
          </UpAnimation>
        </div>
      </div>

      <div className=" container m-auto px-24 py-12">
        <div className="w-full text-center text-7xl text-white">
          Faster. Smarter
        </div>
        <div className=" text-center text-amethyst-200">
          <div className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            debitis voluptate quas!
          </div>
        </div>
      </div>
      <div className="container relative m-auto px-24">
        <img
          src={TopGlowImage}
          className="container absolute left-0 top-0 -z-50 m-auto h-auto rounded-3xl "
          style={{ borderRadius: "86px" }}
          alt=""
        />
        <div className=" absolute bottom-44 left-[10.7rem] ">
          <GlowIconContainer materialIcon={<CodeIcon />} />
        </div>
        <div className=" absolute -bottom-56  left-48 -z-20">
          <LineAnimation
            beamcolor="bg-amethyst-500"
            delay={0}
            height={400}
            tailwindBackgroundColor="bg-cinder-950"
          />
        </div>
        <div className=" flex px-12 pt-28">
          <div className=" w-1/2 flex-col">
            <div className="bg-gradient-to-r from-amethyst-500 via-amethyst-100 to-amethyst-100 bg-clip-text text-3xl text-transparent">
              Innovation
            </div>
            <div className="text-6xl text-white xl:py-8 xl:text-5xl">
              Simplify your security with authentication services
            </div>
            <div className="text-amethyst-300">
              Define access roles for the end-users, and extend your
              authorization capabilities to implement dynamic access control.
            </div>
          </div>
          <div className="w-1/2">
            <img src={FeatureImage} alt="" />
          </div>
        </div>
      </div>
      <div className=" container m-auto mt-12 px-24">
        <div className="text-center text-5xl  text-white ">
          Security Framework{" "}
        </div>
        <div className="m-auto w-1/2 py-4  text-center text-amethyst-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciati
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. aliquam.
        </div>
      </div>
      <div className="container relative m-auto mt-12 px-24">
        <div className="absolute  right-40 -z-20">
          <LineAnimation
            beamcolor="bg-amethyst-500"
            delay={0.2}
            height={70}
            tailwindBackgroundColor="bg-cinder-950"
          />
        </div>
        <div className="w-full rounded-xl border border-gray-800 p-8">
          <div className="flex">
            <div className="w-6/12 p-12">
              <div className="text-2xl font-semibold text-white ">
                Optimized for security
              </div>
              <div className="py-3.5 text-white">
                Optimize for user experience and privacy. Use social login
                integrations, lower user friction, incorporate rich user
                profiling, and facilitate more transactions.
              </div>
              <div className="text-amethyst-200">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente unde earum minus vero illum voluptas ipsum quos at,
                labore aut animi quidem recusandae officia perspiciatis dolor
                accusamus blanditiis. Nemo, voluptas?
              </div>
              <div className="mt-4">
                <Button borderRadius="1rem" duration={4000}>
                  Borders are cool
                </Button>
              </div>
            </div>
            <div className="w-6/12 ">
              <img src={IntegrationImage} alt="" className=" rounded-3xl" />
            </div>
          </div>
        </div>
        <div className="mt-8 flex gap-8">
          <div className="w-8/12 rounded-xl border border-gray-800 p-8">
            <p className="text-3xl capitalize text-white">heading</p>
            <p className="w-4/6 text-base font-thin text-amethyst-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              maxime at, ipsa laborum
            </p>
            <img src={FeatureImage2} alt="" />
          </div>
          <div className="w-4/12 rounded-xl border border-gray-800 p-8">
            section 1
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
