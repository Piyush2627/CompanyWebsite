import DashboardIcon from "@mui/icons-material/Dashboard";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import UpAnimation from "../animations/UpAnimation";
import OurServicesContainer from "../common/OurServicesContainer";
import { BackgroundGradient } from "../animations/BackgroundGradient";
import OurservicesImagesCode from "../../assets/images/yancy-min-842ofHC6MaI-unsplash.jpg";
import HeroBackgroundImage from "../../assets/images/15442885_5611294.png";
import MobileHeroImage from "../../assets/images/Untitled-1.png";
import ApiIcon from "@mui/icons-material/Api";
import GlowIconContainer from "../common/GlowIconContainer";
import { TracingBeam } from "../animations/TracingBeam";
function HomePage() {
  return (
    <>
      {/* <div className="absolute -z-50 hidden lg:block">
        <img src={HeroBackgroundImage} alt="" className="h-screen w-screen" />
      </div>
      <div className="visible absolute -z-50 lg:hidden ">
        <img src={MobileHeroImage} alt="" className="h-screen w-screen" />
      </div> */}

      <TracingBeam>
        <div className=" container absolute left-24 -z-20 h-screen w-10 bg-cinder-950  ">
          .
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

        {/* description */}
        <UpAnimation>
          <div className="container m-auto mt-8 px-24 ">
            <p className=" bg-cinder-950 font-Oswald text-5xl font-medium uppercase tracking-wider text-white">
              Our services
            </p>
            <p className=" bg-cinder-950 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, fuga.
            </p>
            <div className="pl-12">
              <div className=" mt-4 flex justify-between gap-3">
                <div className="w-8/12 rounded-2xl bg-gray-800 text-white">
                  <div className="p-12">
                    <p className="text-center font-Oswald text-3xl font-medium">
                      Web Development Services
                    </p>
                    <p className="text-center text-gray-500">
                      Custom Website Development: We specialize in creating
                      bespoke websites tailored to your unique business needs.
                      Our designs are user-friendly, visually appealing, and
                      optimized for performance.
                    </p>
                  </div>
                  <div className=" relative w-full ">
                    <img
                      src={OurservicesImagesCode}
                      className="h-48 w-10/12 rounded-es-xl rounded-se-2xl"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-4/12 rounded-2xl bg-gray-800 p-12 text-white">
                  <p className="font-Oswald text-3xl">Mobile Application</p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quae consequatur maiores nisi esse tempore quod. Eligendi,
                    fugiat odit facere molestias impedit assumenda similique,
                    repudiandae maxime consequuntur dolorum mollitia velit amet!
                  </p>
                </div>
              </div>
            </div>
            <div className="pl-12">
              <div className=" mt-3 w-full rounded-2xl bg-gray-800 p-12">
                <p className="font-Oswald text-3xl font-medium text-white">
                  Web Application Services
                </p>
                <p className="text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laborum, blanditiis.
                </p>
              </div>
            </div>
          </div>
        </UpAnimation>

        <UpAnimation>
          <div className=" container m-auto mt-12 justify-between  gap-12 space-y-6 px-6 lg:mt-8 lg:flex lg:space-y-0 lg:px-24">
            <div className="w-full">
              <p className="font-Oswald text-lg font-bold capitalize text-white lg:text-3xl">
                Let's Get Started!
              </p>
              <p className="font-OpenSans text-base text-gray-500 lg:text-lg">
                Ready to take your online presence to the next level? Get in
                touch with us today to discuss your project requirements and
                discover how we can help you achieve your digital goals. Whether
                you're starting from scratch or looking to revamp your existing
                website, we're here to turn your vision into reality.
              </p>
            </div>
            <div className="w-full">
              <p className="font-Oswald text-lg font-bold capitalize text-white lg:text-3xl">
                Description
              </p>
              <p className="font-OpenSans text-base text-gray-500 lg:text-lg">
                At NeuralRoots, we specialize in turning your digital dreams
                into reality. Our team of expert designers, developers, and
                digital strategists work tirelessly to create captivating
                websites that not only look stunning but also drive results for
                your business.
              </p>{" "}
              <div className=" flex space-x-8 py-6 text-white">
                <DashboardIcon sx={{ fontSize: 40 }} />
                <AcUnitIcon sx={{ fontSize: 40 }} />
                <AccountBalanceWalletIcon sx={{ fontSize: 40 }} />
              </div>
            </div>
          </div>
        </UpAnimation>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iste
          hic, nulla distinctio vero quos quae, deleniti accusamus adipisci sit
          ex rerum unde enim amet aliquid iure. Nulla labore distinctio id
          doloribus nemo ut sapiente facilis obcaecati velit eius maxime vitae
          at, minus rem veniam laboriosam fuga. Aliquid doloribus asperiores at
          dolorum quod in nihil ipsum rerum, vitae quas tempora minima nobis.
          Corrupti dolore perferendis tempora culpa incidunt officia a est
          aliquam, quas dolor eveniet non, dicta ad debitis distinctio
          aspernatur. Nobis atque totam magnam tenetur aliquam voluptates quia
          dignissimos assumenda recusandae optio illum reiciendis nihil quae,
          consequuntur eligendi saepe repellendus inventore nulla omnis quis
          harum natus. Assumenda veniam labore omnis eveniet ratione accusantium
          tenetur culpa necessitatibus commodi dicta alias vitae ad laboriosam
          voluptatibus, aut aspernatur ipsa nihil distinctio eligendi. Aliquid
          odio quas impedit ad exercitationem explicabo quibusdam, cumque
          laboriosam vitae earum adipisci! Exercitationem numquam impedit
          voluptatem tempore assumenda pariatur dolorum possimus incidunt
          inventore aliquam vel dolorem labore at ducimus animi repudiandae
          repellendus nesciunt, laborum minus. Rerum, architecto adipisci
          reprehenderit quis laborum similique repellendus neque error at
          inventore iste, recusandae, assumenda suscipit tempore laudantium
          eligendi placeat ipsam. Expedita ipsa ducimus fuga, aut voluptates
          minima quidem nemo laborum reprehenderit? Suscipit iusto obcaecati rem
          temporibus incidunt unde qui! Voluptatum nihil sit provident dolore
          quibusdam optio ratione suscipit ea consequatur ipsam est ipsa illum
          quas eligendi placeat quisquam deleniti, assumenda voluptate eum,
          explicabo reprehenderit dignissimos? Labore et, perferendis ducimus
          nam libero fuga unde officiis facere sequi expedita, eveniet dolores
          laborum impedit maxime sit architecto corrupti, incidunt deserunt ex
          consequatur quas eligendi omnis. Facere molestias repellat voluptas
          quaerat tenetur, perspiciatis autem soluta explicabo quisquam ipsa,
          atque eum porro ex suscipit sunt aut a quam voluptate quos rerum
          dolorum, iusto ratione molestiae dolores? Et exercitationem saepe
          perspiciatis dolor sapiente! Provident consequatur impedit voluptates
          reiciendis totam aliquam eos id. In aut vel quis nisi sint odio
          accusantium neque soluta, eum mollitia dolore voluptate temporibus
          ipsum beatae, asperiores saepe unde nobis aspernatur quas excepturi
          eius. Illo alias velit ipsa expedita! Doloremque officiis voluptas
          beatae magni. Ducimus est quae voluptas nulla dolorem corporis id enim
          reprehenderit neque? Nostrum, qui. Ipsam est debitis, libero ratione
          incidunt odio placeat non quisquam in tempora eius officiis saepe,
          autem, rem cum provident accusantium. Facere, at nostrum enim expedita
          soluta esse libero optio debitis magnam ut nobis obcaecati cupiditate
          eveniet. Provident vero enim obcaecati sunt id velit harum fugit cum
          aperiam officia expedita explicabo, recusandae exercitationem hic
          fugiat ex nisi ratione, minus reiciendis. Id obcaecati incidunt
          aperiam animi consectetur. Eius numquam perferendis accusantium,
          eligendi explicabo libero odio dignissimos vitae laboriosam beatae
          omnis, obcaecati magnam doloremque doloribus magni? Explicabo, culpa
          architecto accusantium cum est veniam neque debitis consectetur
          laboriosam at quaerat animi nobis, eos sapiente tenetur suscipit fugit
          consequatur vitae minima magni, dicta odio nihil. Et accusamus,
          architecto blanditiis ullam inventore eos quia sequi ducimus ipsum
          iure assumenda quo dolor incidunt debitis optio sint atque culpa
          doloribus non quaerat voluptatum fugit tenetur consequatur similique!
          Temporibus fugit illum at eius a accusantium? Quos, cum
          exercitationem.
        </div>
      </TracingBeam>
    </>
  );
}

export default HomePage;
