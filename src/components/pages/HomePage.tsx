import DashboardIcon from "@mui/icons-material/Dashboard";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import UpAnimation from "../animations/UpAnimation";
import OurServicesContainer from "../common/OurServicesContainer";
import { BackgroundGradient } from "../animations/BackgroundGradient";
import HeroBackgroundImage from "../../assets/images/15442885_5611294.png";
import MobileHeroImage from "../../assets/images/Untitled-1.png";
import ApiIcon from "@mui/icons-material/Api";
import GlowIconContainer from "../common/GlowIconContainer";
import { TracingBeam } from "../animations/TracingBeam";
function HomePage() {
  return (
    <>
      <div className="absolute -z-50 hidden lg:block">
        <img src={HeroBackgroundImage} alt="" className="h-screen w-screen" />
      </div>
      <div className="visible absolute -z-50 lg:hidden ">
        <img src={MobileHeroImage} alt="" className="h-screen w-screen" />
      </div>

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
        <div className="container m-auto mt-8 px-24 ">
          <p className=" text-center font-Oswald text-5xl font-medium uppercase tracking-wider text-white">
            lorem
          </p>
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          magnam aliquam saepe explicabo. Ipsa perferendis officiis temporibus
          ratione aliquam ea sunt nostrum officia molestias ad nemo laborum
          amet, animi, veritatis provident non iusto nesciunt iste quae dolore?
          Libero, nisi atque. Veritatis voluptate sequi numquam, facere laborum
          neque, hic id mollitia enim praesentium aliquam ipsam dolor facilis
          in! Illo natus tempore modi delectus ad dicta consectetur aliquam
          beatae voluptates, repellat omnis vel quae ratione provident fugiat?
          Asperiores rerum suscipit quod ducimus voluptates modi cupiditate
          magni harum corrupti, nesciunt amet voluptatum unde eos totam
          reiciendis ipsum ullam placeat minima. Dolores possimus placeat
          blanditiis eius repellat excepturi modi sunt ipsum! Hic, voluptates?
          Laboriosam non accusamus, vel soluta perferendis suscipit odio
          perspiciatis dolor consequuntur quos dolorum nesciunt ut eius, ullam
          autem ipsam iste libero culpa mollitia minima. Necessitatibus natus
          eveniet aut ab, vel ducimus pariatur corporis cumque enim inventore
          delectus, error totam obcaecati quam repudiandae labore blanditiis
          consequatur quae impedit exercitationem. Perferendis, delectus. Quas
          eligendi necessitatibus eveniet reprehenderit repellat, adipisci totam
          voluptatibus. Dicta maiores, delectus ratione eaque laboriosam
          temporibus repellendus pariatur quasi ab non ipsum? Totam unde ipsam
          tempore harum tempora qui obcaecati nesciunt officiis doloremque a,
          voluptate officia veritatis modi expedita vero enim, quia quod in
          eveniet necessitatibus minus? Vero, commodi! Autem nam nihil cum
          libero? Esse fuga cupiditate doloremque nemo facere a, nostrum iste
          fugit similique dolorum sed sint expedita ratione porro recusandae cum
          possimus sit odit? Repellat ipsa fugit doloribus! Delectus dignissimos
          totam consequuntur, obcaecati ab quo quaerat quos corporis perferendis
          minima ad deserunt explicabo odio? Temporibus consequuntur
          perspiciatis pariatur iusto quas reiciendis soluta ad reprehenderit
          quod. Aut modi incidunt dolor ea ab a recusandae corporis sequi ipsum,
          velit fugiat quo, impedit amet commodi nobis autem porro non! Autem
          illum consectetur ex veniam! Dolore molestiae dignissimos, laudantium
          dolorem placeat explicabo molestias perferendis adipisci dolorum quas
          doloribus labore ratione illo ipsum eius ullam deserunt temporibus!
          Quos nemo ratione quo, qui saepe, veniam esse fuga culpa in labore
          repellendus eius sequi, maiores hic magnam laborum provident? Dolores
          eum quae, voluptatem incidunt repudiandae quas doloremque dolorum
          voluptas corrupti mollitia adipisci? Ea amet optio distinctio, sequi
          voluptatem animi perspiciatis, minima vel impedit fugiat temporibus
          sit nihil, cupiditate ducimus suscipit maxime similique eum eaque ipsa
          inventore dolores. Possimus dicta aspernatur quis accusamus doloribus
          consequatur ipsam tenetur eum esse facilis alias animi numquam,
          deleniti repellat laudantium ipsa dolores. Illum magni placeat
          doloribus dolores unde accusantium accusamus nobis deserunt nisi
          architecto aliquid suscipit quasi rerum sit omnis, ratione porro?
          Suscipit, minima? Saepe corporis magnam veritatis dicta sit blanditiis
          veniam, obcaecati rerum autem dolore doloribus inventore nulla tempora
          temporibus fugiat porro modi natus sequi quidem possimus ratione
          molestias minima debitis. Saepe similique sint soluta esse deleniti
          modi quod quia voluptatibus, quo enim, minima, ratione alias at.
          Ducimus quaerat omnis aperiam delectus eos optio sed ut corporis
          sapiente, sunt quam, nihil non obcaecati vitae illo laboriosam illum
          soluta iure reiciendis sint consequuntur harum odit ex! Ab
          necessitatibus corporis perferendis dolorum. Tenetur, quae iusto
          veniam, deserunt dolor illo harum illum minima exercitationem dolorum
          vero itaque quia molestias? Cum laudantium dolor repellat recusandae
          exercitationem. Reprehenderit perspiciatis repudiandae veritatis quis
          cum nemo eos quidem quae? Nihil doloremque vero inventore ullam.
          Corporis, ratione earum excepturi voluptatum tempora, rem esse quas
          unde possimus commodi cum hic deleniti consequuntur autem sequi
          pariatur fuga? A quo delectus ratione suscipit sapiente vero dolorum
          iure nostrum eveniet? Laborum doloremque, aliquam fugit soluta et
          nobis dolore reprehenderit voluptatum rem nisi repudiandae voluptates
          quaerat deleniti aspernatur? Ea est pariatur iusto cumque rerum? Odit
          laudantium alias, itaque atque nemo repudiandae nobis aliquid soluta
          temporibus quia incidunt iste corporis! Illum eaque autem quibusdam
          ipsum expedita at. Nesciunt dolor atque, ducimus debitis aperiam
          cupiditate dolore, rem architecto dicta nam tenetur magni sed ratione
          quia beatae inventore facere voluptas, laboriosam nulla. Deserunt eos
          illum, dolore non, doloribus nisi cupiditate recusandae accusantium
          voluptas ullam reprehenderit numquam! Aspernatur nulla omnis minima
          iusto numquam ad veritatis voluptatem. Tempora illo fuga explicabo
          pariatur, tenetur, ipsa fugiat laboriosam repellat eveniet vitae a.
          Deserunt repellendus molestias doloribus. Distinctio dolorum obcaecati
          aut impedit, accusamus eos reiciendis nihil rerum modi molestias!
          Nihil, non soluta illo provident facilis a iusto temporibus minima
          veritatis eligendi. Ab fugit commodi maiores cum consequatur nulla
          quidem laborum, aliquam est cumque nisi explicabo nemo quis aut
          deleniti? Architecto enim reiciendis, facilis dolorem iste itaque
          earum, quas nemo mollitia nostrum molestias excepturi! Fugit,
          accusamus quisquam, pariatur ipsum cumque quaerat, incidunt a
          distinctio culpa quia eaque mollitia minima rem at iure error sed
          laborum debitis! Veniam cumque sunt ipsum excepturi quibusdam tenetur
          minima quae sit totam, accusamus ratione non officiis animi
          reprehenderit fugiat molestias veritatis quam, cum consectetur quasi
          at dolorem. Enim porro fugiat suscipit mollitia distinctio iste sunt
          harum quidem. Expedita architecto, aliquam beatae quasi eveniet eaque
          ad iure ea eligendi debitis sint veritatis qui nesciunt? Aliquid
          deserunt obcaecati alias sit harum sunt tempora dolor repudiandae
          laboriosam accusantium eius expedita hic exercitationem ex, dolore
          labore unde repellat? Delectus impedit laboriosam pariatur, reiciendis
          eveniet reprehenderit adipisci, totam ipsum alias iste, ea mollitia?
          Deleniti quisquam eum omnis veniam ipsam mollitia porro nihil, ducimus
          et molestiae laudantium fugiat nam voluptates reiciendis facere a
          doloremque ullam. Fuga in ab doloribus omnis architecto, ratione
          pariatur reiciendis nam sequi nobis expedita dolores obcaecati nulla,
          facilis molestias similique consectetur qui vero tempora aliquam
          veniam distinctio corporis! Est saepe eaque temporibus quibusdam quas
          corporis alias veniam ratione reprehenderit sint. Incidunt praesentium
          veniam, commodi sapiente iste a obcaecati ut dignissimos voluptatem
          deserunt accusamus nulla earum. Harum facilis sed at distinctio,
          dolores esse quasi! Velit, iusto molestias dolore ipsam unde
          reprehenderit optio sapiente ab rerum doloribus aliquid, distinctio,
          quasi quia. Minima tenetur, beatae fugiat cupiditate delectus nostrum
          reprehenderit repudiandae consequatur aperiam distinctio. Quo ex
          soluta a vel! Porro quaerat adipisci laudantium, labore sint ea quo
          laboriosam possimus corrupti eaque sed excepturi quos nostrum
          voluptate nobis at explicabo nulla vitae, aperiam, eos fugiat.
          Delectus aut cum tenetur ut facilis amet possimus nisi, quisquam
          expedita error architecto at iusto a officiis tempore labore magnam
          quidem. Sint, libero eaque! Excepturi nulla labore doloribus.
        </div>
      </TracingBeam>
    </>
  );
}

export default HomePage;
