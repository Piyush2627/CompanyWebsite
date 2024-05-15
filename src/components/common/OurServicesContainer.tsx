function OurServicesContainer() {
  return (
    <div>
      <div className=" m-aut container px-24">
        <div className="flex justify-between">
          <div className="">
            <p className="bg-gradient-to-r from-violet-500 via-blue-400 to-blue-400 bg-clip-text text-9xl font-medium tracking-wider text-transparent">
              Our <br />
              Services
            </p>
            <p className="text-1xl font-medium tracking-wider dark:text-gray-700 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              libero cum,
            </p>
          </div>

          <div className=" mr-40 mt-8">
            <aside className=" w-full max-w-lg rounded-lg bg-gray-900 p-6 font-mono text-white shadow-lg shadow-violet-400">
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
        </div>
      </div>
    </div>
  );
}

export default OurServicesContainer;
