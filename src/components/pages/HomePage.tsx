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
            <div className="mt-4">
              <Button borderRadius="1rem" duration={4000}>
                Borders are cool
              </Button>
            </div>
          </UpAnimation>
        </div>
      </div>

      <div className=" container m-auto px-24 py-12">
        <div className="w-full text-center text-7xl text-white">
          Faster, Smarter Services
        </div>
        <div className=" text-center text-white">
          <div className="py-2">
            At <span className="text-amethyst-500">NeuralRoot</span> we
            specialize in creating cutting-edge web applications that drive
            business success
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
        <div className=" absolute bottom-28 left-[10.65rem] ">
          <GlowIconContainer materialIcon={<CodeIcon />} />
        </div>
        <div className=" absolute -bottom-56  left-48 -z-20">
          <LineAnimation
            beamcolor="bg-amethyst-500"
            delay={0}
            height={330}
            tailwindBackgroundColor="bg-cinder-950"
          />
        </div>
        <div className=" flex px-12 pt-28">
          <div className=" w-1/2 flex-col">
            <div className="bg-gradient-to-r from-amethyst-500 via-amethyst-100 to-amethyst-100 bg-clip-text text-3xl text-transparent">
              Empowering Innovation
            </div>
            <div className="text-6xl text-white xl:py-8 xl:text-5xl">
              Transforming Ideas into Cutting-Edge Web and Mobile Experiences
            </div>
            <div className="text-amethyst-300">
              Our team of skilled developers and designers is dedicated to
              delivering solutions that are not only innovative but also
              tailored to meet the unique needs of each client. Here’s an
              overview of our key services:
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
      <div className="container  relative m-auto mt-12 px-24">
        <UpAnimation delay={0} className=" absolute right-0 top-64 ">
          <div className=" mr-40 mt-12">
            <aside className=" w-full max-w-lg rounded-lg bg-gray-900 p-6 font-mono text-white shadow-md shadow-amethyst-900">
              <div className="flex items-center justify-between">
                <div className="flex space-x-2 text-red-500 ">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm text-violet-500">bash</p>
              </div>
              <div className="mt-4">
                <p className="text-violet-500">$ npm install @neuralRoot</p>
                <p className="text-white">+ next@10.2.3</p>
                <p className="text-white">
                  added 1 package, and audited 2 packages in 3s
                </p>
                <p className="text-violet-500">$</p>
              </div>
            </aside>
          </div>
        </UpAnimation>
        <div className="w-full rounded-xl border border-gray-800 p-8">
          <div className="flex gap-12">
            <div className="w-6/12 ">
              <div className="bg-gradient-to-r from-amethyst-500 via-amethyst-100 to-amethyst-100 bg-clip-text text-3xl font-semibold text-transparent">
                Custom Web Application Development
              </div>
              <div className="py-3.5 text-white">
                Our expertise lies in building custom web applications from the
                ground up. We leverage the latest technologies and frameworks to
                create scalable, secure, and high-performance solutions that
                align with your business goals. Whether you need a robust
                enterprise system or a sleek, user-friendly web app, we have the
                skills and experience to deliver.
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
        <div className=" relative mt-36 flex gap-8">
          <div className=" absolute -top-36 left-24 -z-20">
            <LineAnimation
              beamcolor="bg-gradient-to-b from-amethyst-500 via-amethyst-100 to-amethyst-100"
              delay={0}
              height={144}
              tailwindBackgroundColor="bg-cinder-950"
            />
          </div>
          <div className="w-8/12 rounded-xl border border-gray-800 p-8">
            <p className="bg-gradient-to-r from-amethyst-500 via-amethyst-100 to-amethyst-100 bg-clip-text text-3xl font-semibold text-transparent">
              UX/UI Design
            </p>
            <p className="w-4/6 text-base font-thin text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              Our UX/UI designers focus on creating intuitive and visually
              appealing interfaces that provide an exceptional user experience.
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
