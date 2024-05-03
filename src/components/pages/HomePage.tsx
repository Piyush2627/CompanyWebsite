import UpAnimation from "../animations/UpAnimation";

function HomePage() {
  return (
    <>
      <UpAnimation duration={0.8}>
        <div className="  text-center pb-40">
          <div className="pt-40 m-auto container px-44">
            <p className="text-8xl font-bold uppercase font-Oswald text-green-500">
              NeuralRoots
            </p>
            <p className="text-5xl font-semibold uppercase font-Oswald ">
              Technologies<sup className=" font-normal text-2xl">PVT</sup>
            </p>

            <p className="mt-4 text-2xl font-medium font-OpenSans">
              We're all about using tech to turn ideas into reality. Leading in
              web solutions, we craft stunning websites and cutting-edge apps to
              captivate audiences and fuel business growth.
            </p>
            <div className="">
              <button className="px-5 py-3 font-medium bg-green-500 hover:bg-green-700 rounded-md  text-white mt-5 font-OpenSans">
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </UpAnimation>
      <UpAnimation duration={0.8} delay={0.5}>
        <div className=" container px-24 m-auto">
          <div className=" block lg:flex justify-between ">
            <div className="w-full">
              <div className="">
                <p className="text-4xl font-semibold">Card Heading</p>
                <p className="mt-2 text-lg">
                  Empowering Your Online Presence with Custom Web Solutions
                </p>

                <p className="text-gray-500 mt-3">
                  Lorem ipsum, dolor sit amet consect etur adipisicing elit.
                  Soluta, voluptatem dolorum mollitia ipsa iusto voluptates
                  error a totam beatae sequi delectus saepe nemo nam omnis, fuga
                  deserunt repellendus possimus magni!
                </p>
              </div>
            </div>
            <div className="w-full">
              <img
                className="w-full h-80 rounded-lg border-2 object-cover"
                src="https://i.ibb.co/x2sNVGM/pexels-orhan-badur-253753151-17113025.jpg"
                alt="pexels-orhan-badur-253753151-17113025"
              />
            </div>
          </div>
        </div>
      </UpAnimation>

      <div className=" container m-auto px-24 my-16 ">
        <div>
          <p>Used Technology</p>
          <p>service that help you grow</p>
        </div>
        <p className=" font-Oswald uppercase text-xl">Our Product</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
          tempora quae impedit porro saepe voluptatem excepturi beatae adipisci
          mollitia, eius eum commodi ad iusto a maxime perspiciatis dignissimos
          vitae. Maiores!
        </p>
        <div className=" flex justify-around gap-12 mt-4">
          <div className=" w-full bg-green-500 h-64 rounded-md text-white">
            <div>Web-Design</div>
            <div>
              Showcase your expertise in creating visually appealing and
              user-friendly website designs. Emphasize the use of modern design
              principles, responsive layouts, and intuitive navigation.
            </div>
          </div>
          <div className=" w-full bg-green-500 h-64 rounded-md text-white">
            <div>full stack development</div>
            <div>
              Showcase your expertise in creating visually appealing and
              user-friendly website designs. Emphasize the use of modern design
              principles, responsive layouts, and intuitive navigation.
            </div>
          </div>
          <div className=" w-full bg-green-500 h-64 rounded-md text-white">
            <div>E-commerce Solutions</div>
            <div>
              Showcase your expertise in creating visually appealing and
              user-friendly website designs. Emphasize the use of modern design
              principles, responsive layouts, and intuitive navigation.
            </div>
          </div>
        </div>
        <div className=" flex justify-around gap-12 mt-4">
          <div className=" w-full bg-green-500 h-64 rounded-md text-white">
            Content Management Systems (CMS):{" "}
          </div>
          <div className=" w-full bg-green-500 h-64 rounded-md text-white">
            Mobile Responsive Design
          </div>
          <div className=" w-full bg-green-500 h-64 rounded-md text-white">
            Custom Web Applications
          </div>
        </div>
      </div>
      <div className=" container px-24">
        <div>
          <img
            className="w-full rounded-md h-96"
            src="https://i.ibb.co/x2sNVGM/pexels-orhan-badur-253753151-17113025.jpg"
            alt="pexels-orhan-badur-253753151-17113025"
          />
        </div>
        <div className="text-center relative">
          <div className="font-Oswald absolute top-14 w-full">
            <p className="">Hello There is a big thing is Used </p>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex gap-12 items-end">
            <div className=" w-full rounded-md bg-green-500 h-48">.</div>
            <div className=" w-full rounded-md bg-green-500 h-36">.</div>
            <div className=" w-full rounded-md bg-green-500 h-24">.</div>
            <div className=" w-full rounded-md bg-green-500 h-36">.</div>
            <div className=" w-full rounded-md bg-green-500 h-48">.</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
