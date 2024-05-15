import AcUnitIcon from "@mui/icons-material/AcUnit";
import UpAnimation from "../animations/UpAnimation";
import { BackgroundGradient } from "../animations/BackgroundGradient";
import { TracingBeam } from "../animations/TracingBeam";
import GlowIconContainer from "../common/GlowIconContainer";
import OurServicesContainer from "../common/OurServicesContainer";
import UiUxImg from "../../assets/images/16829080_5741168.jpg";

// icons
// import BrushIcon from "@mui/icons-material/Brush";
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
              <div className="relative flex">
                <div className="w-6/12">
                  <p className="  text-6xl font-medium tracking-wider  ">
                    UI/UX <br />
                    Design
                  </p>
                </div>

                <div className=" absolute left-72 top-0 rounded-full shadow-xl shadow-violet-200">
                  <img
                    src={UiUxImg}
                    className="top-0 z-40 h-12 w-12 rounded-full"
                    alt=""
                  />
                </div>

                <div className=" absolute left-80 top-16 ">
                  <img
                    src={UiUxImg}
                    className="top-0 z-40 size-24 rounded-full"
                    alt=""
                  />
                </div>
                <div className=" absolute right-12 top-3 ">
                  <img
                    src={UiUxImg}
                    className="top-0 z-40 h-12 w-12 rounded-full"
                    alt=""
                  />
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
                  className=" mt-12 h-48 w-full rounded-xl"
                />
              </div>
            </div>
            <div className="w-1/2 ">
              <img src={UiUxImg} alt="" className="h-full w-full rounded-3xl" />
            </div>
          </div>
        </div>

        <div className=" container  m-auto mt-12 px-24">
          <div className=" relative flex justify-between rounded-3xl bg-gradient-to-r from-black from-75%  to-transparent text-white">
            <div className="p-8">
              <div className=" text-4xl ">Web Application</div>
              <div className=" text-3xl text-violet-600  ">
                Rooted in Innovation, Branching into Tomorrow
              </div>
              <div className=" mt-4">
                Extend your digital reach with our mobile app development
                services. From iOS to Android, we create native and
                cross-platform apps that elevate your brand and engage your
                audience on the go.
              </div>
            </div>
            <div>
              <img
                src={UiUxImg}
                alt=""
                className="absolute right-0 -z-10 h-full w-1/4 rounded-e-3xl"
              />
            </div>
          </div>
        </div>
        <div className=" container  m-auto mt-12 px-24">
          <div className=" relative flex justify-between rounded-3xl bg-gradient-to-r from-black from-75%  to-transparent text-white">
            <div className="p-8">
              <div className=" text-4xl ">Mobile Application</div>
              <div className=" text-3xl text-violet-600  ">
                Rooted in Innovation, Branching into Tomorrow
              </div>
              <div className=" mt-4">
                Extend your digital reach with our mobile app development
                services. From iOS to Android, we create native and
                cross-platform apps that elevate your brand and engage your
                audience on the go.
              </div>
            </div>
            <div>
              <img
                src={UiUxImg}
                alt=""
                className="absolute right-0 -z-10 h-full w-1/4 rounded-e-3xl"
              />
            </div>
          </div>
        </div>
        <div className=" container m-auto mt-12 px-24 ">
          <p className=" bg-gradient-to-r from-violet-500 via-blue-400 to-blue-400 bg-clip-text text-center text-8xl font-semibold text-transparent">
            lorem loreem
          </p>
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
          temporibus distinctio dolore quas quaerat exercitationem optio
          quibusdam commodi inventore, cupiditate tenetur impedit perferendis
          placeat praesentium veniam ipsa. Unde dolorem rem animi magnam sequi
          eaque maxime nostrum harum adipisci, beatae quaerat, quo sit quidem
          laborum commodi deserunt iste repudiandae explicabo fugiat itaque eum!
          Ipsam, aspernatur aperiam quibusdam, non deserunt soluta consequuntur
          aliquam temporibus, sit fugiat possimus sint vitae facere enim? Animi
          reprehenderit iure culpa minima! Assumenda aspernatur non optio quos
          harum quod incidunt cum? Blanditiis illum impedit illo provident!
          Adipisci, illo ut pariatur aliquam repellat at delectus molestias
          minus soluta, laborum quaerat sunt hic maiores amet perferendis
          incidunt. Reiciendis libero nulla sint omnis sequi, quasi sit illo
          rerum quam! Aliquam facere laudantium sequi quia recusandae laboriosam
          veniam maiores doloribus harum itaque? Quas minima consequatur aperiam
          aliquid. Consequuntur obcaecati id saepe iste? Repellendus iure a
          ratione, repellat blanditiis, animi nihil recusandae quasi adipisci ad
          ab. Temporibus, omnis ut nihil minima, commodi ipsa, cumque inventore
          ea eveniet nulla aliquam debitis ratione delectus rerum tempore?
          Debitis voluptates placeat, quo maxime ad inventore earum. Quod
          aperiam quaerat voluptas maxime perspiciatis dolorem eius sequi dolor
          aut odit, vel aliquid voluptatem voluptates esse minima necessitatibus
          eveniet cupiditate! Placeat nostrum similique harum. Accusantium
          recusandae voluptas ipsam ad quasi esse ab quod, corrupti sunt
          perspiciatis dolorum hic odio adipisci minus corporis est autem ut.
          Accusamus maiores amet ea, sapiente voluptatibus delectus enim nulla
          distinctio odit non velit dolore necessitatibus. Totam in cupiditate
          sit laudantium rerum consectetur magni, at a iste distinctio voluptate
          magnam debitis, culpa quam hic nihil porro iusto quibusdam cumque
          corporis ad! Aliquid vero cupiditate cum molestias assumenda, mollitia
          impedit veritatis! Perspiciatis expedita rerum facilis beatae totam
          quam quae magni molestias tempora vitae ullam consequatur, amet
          inventore quas placeat voluptate repudiandae maxime, repellendus
          blanditiis esse sed libero. Voluptatibus maxime nostrum quis magni
          ratione iure voluptas quod delectus obcaecati assumenda, nam, non
          neque expedita quisquam laudantium impedit, natus beatae. Iure hic
          quaerat vitae tenetur deserunt, corporis nostrum, perferendis quam
          fugit sed cumque velit nihil asperiores aperiam exercitationem
          praesentium soluta labore, consequatur repudiandae neque suscipit. Rem
          ratione, ex ad est facere officia repellendus rerum ab voluptatibus
          excepturi quasi commodi iure praesentium dicta dolor quas impedit,
          laudantium eius. Unde saepe ex, nulla reprehenderit accusantium
          voluptates repellendus tempore beatae maxime eaque similique qui
          magnam quidem consequuntur veritatis autem architecto sit, quis modi
          alias vel quod! Doloribus, quia ipsum. Consectetur quas error expedita
          laudantium atque soluta aliquid sunt, corporis eos officia dolorem
          praesentium maxime sint possimus accusantium eveniet dolores molestiae
          commodi ea. Non excepturi temporibus quisquam, beatae repellat ratione
          deserunt distinctio recusandae totam nobis facere ea nostrum ullam
          autem voluptates harum accusamus molestiae sit? Asperiores, inventore
          doloremque! Cupiditate impedit beatae dolor nesciunt non incidunt eum
          nisi error? Sint voluptatem facere ipsum eveniet accusamus a quia
          iusto quis quos distinctio repellendus, incidunt autem nisi maxime
          minima aperiam architecto atque cupiditate perferendis dignissimos in
          cumque commodi rem. Impedit rem tempore distinctio dignissimos unde,
          dicta nobis minus, fugit iste ullam eos in velit dolore. Recusandae
          maxime animi blanditiis eos illum voluptas facilis iste mollitia
          aspernatur! Reprehenderit aliquam ducimus reiciendis ratione ut harum?
          Fugit hic ipsum aliquam, doloribus officiis, labore neque obcaecati
          porro vel quisquam quasi, iure quae quaerat quis rerum? Impedit nobis
          dignissimos, minima necessitatibus sint repellendus facilis possimus
          distinctio ipsum praesentium tenetur dicta corporis esse! Fugit aut,
          quam assumenda voluptates repudiandae nobis pariatur atque placeat at
          beatae accusamus amet, dignissimos maxime deleniti cumque
          consequuntur, nisi eaque facilis voluptas. Odio aliquam sunt, nostrum
          sequi quidem deleniti mollitia illo consequuntur magnam quae, in
          eaque. Impedit, modi quidem quos accusamus dignissimos nihil tempore
          recusandae quisquam reiciendis itaque temporibus rem amet facilis sit
          voluptates obcaecati! Minus totam beatae temporibus ullam, quisquam
          accusantium et necessitatibus excepturi porro aut dolorem commodi
          ipsum magni illo doloremque autem perspiciatis rem quia ducimus vel?
          Quia explicabo amet esse repudiandae cumque cupiditate, autem,
          laboriosam fuga, incidunt magni quis. Iusto, animi labore, excepturi
          vel non ut ullam aliquid, sunt deleniti ducimus ad veritatis harum? Ea
          voluptatum quae voluptatibus temporibus minima accusantium delectus
          distinctio, incidunt corporis porro, repudiandae sed tempora, numquam
          harum? Dolores eligendi voluptas voluptatum? Quidem quas laudantium
          quibusdam similique alias vero. Doloribus error recusandae adipisci
          dolores eos illum dicta accusantium tempore perferendis maxime,
          corrupti eaque nobis maiores nisi incidunt aspernatur, iusto quia iure
          fugit soluta repudiandae tenetur! Ullam eaque ex nostrum, distinctio,
          molestiae officiis totam eius obcaecati quaerat ratione alias rem et
          nemo id exercitationem suscipit aspernatur reprehenderit eum voluptate
          veritatis est quas! Sed tempore tenetur similique blanditiis ipsam?
          Minima enim nobis odit, quia sint alias, doloribus nisi incidunt
          explicabo ipsa error earum ut voluptatibus eveniet corrupti commodi
          amet sequi dolores. Libero culpa iusto labore. Doloribus commodi ea
          magnam, ullam aliquid architecto sit illo. Maiores omnis cum aliquid
          officia voluptatem nisi minus quae rerum tempora impedit sint
          voluptate laborum eum ex at odio esse, quam cupiditate tenetur quod a
          blanditiis! Et quae amet, totam non obcaecati provident eaque? Minus
          similique cumque impedit repudiandae, recusandae cupiditate. Alias
          esse minus laborum aperiam sequi et dolore quasi tempora optio eos
          illum hic neque inventore ipsa eveniet commodi numquam est, quam nobis
          libero quaerat! Ullam quam exercitationem architecto molestias
          dignissimos eligendi dolorem nobis. Nisi quia laudantium, nemo autem
          id harum quibusdam, quasi aliquam hic repudiandae dignissimos! Numquam
          architecto optio perferendis placeat quod id aspernatur fuga explicabo
          vero eaque, praesentium voluptatibus quos porro nam laboriosam modi a
          ducimus incidunt est libero harum! Nesciunt reprehenderit maxime ad
          non dolores ipsam sapiente officia corporis, aperiam repudiandae earum
          voluptate animi provident architecto, quam ea voluptas veritatis quis
          possimus numquam ratione voluptatum, impedit dignissimos. A dicta
          quis, nihil perferendis recusandae, accusantium sit enim fuga
          repudiandae voluptates necessitatibus, maxime eum velit obcaecati id
          perspiciatis error nulla! In voluptatem, excepturi nemo ex neque
          voluptas? Sunt optio ipsam tempora laudantium dignissimos molestiae
          non sequi cumque fuga quae nihil harum quibusdam, sed aliquam iure
          autem rem blanditiis quisquam debitis! Quibusdam architecto nam rem
          earum molestias voluptatum sed et voluptate ad aliquid libero eaque
          consequuntur minima unde quis facere praesentium nostrum neque
          possimus, odio ipsum excepturi placeat aspernatur.
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
