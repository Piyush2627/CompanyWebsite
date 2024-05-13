function Footer() {
  return (
    <>
      <div className=" container m-auto mt-12 px-24">
        <div className="flex justify-between gap-12">
          <div className="w-full">
            <p className="text-4xl font-bold text-white">NeuralRoots</p>
            <p className="font-OpenSans text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              impedit id voluptatum, sequi,
            </p>
          </div>
          <div className="w-full">
            <p className="  font-bold text-white">Company</p>
            <ul className="text-gray-500">
              <li>About</li>
              <li>features</li>
              <li>works </li>
              <li>Career</li>
            </ul>
          </div>
          <div className="w-full">
            <p className="  font-bold text-white">Resources</p>
            <ul className="text-gray-500">
              <li>Cources</li>
              <li>Intership</li>
              <li>blogs</li>
            </ul>
          </div>
          <div className="w-full">
            <div>
              <p className="  font-bold text-white">Contect Us </p>
              <div>
                <input type="text" name="" id="" />
              </div>
              <div className="text-gray-500">
                <button>Send a message</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" divide-y-2"></div>
      </div>
    </>
  );
}

export default Footer;
