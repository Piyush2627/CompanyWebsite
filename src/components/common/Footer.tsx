function Footer() {
  return (
    <>
      <div className=" container px-24 mt-12">
        <div className="flex justify-between gap-12">
          <div className="w-full">
            <p className="font-bold text-4xl text-green-500">NeuralRoots</p>
            <p className="font-OpenSans text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              impedit id voluptatum, sequi,
            </p>
          </div>
          <div className="w-full">
            <p className="font-Oswald font-bold text-green-500">Company</p>
            <ul>
              <li>About</li>
              <li>features</li>
              <li>works </li>
              <li>Career</li>
            </ul>
          </div>
          <div className="w-full">
            <p className="font-Oswald font-bold text-green-500">Resources</p>
            <ul>
              <li>Cources</li>
              <li>Intership</li>
              <li>blogs</li>
            </ul>
          </div>
          <div className="w-full">
            <div>
              <p className="font-Oswald font-bold text-green-500">
                Contect Us{" "}
              </p>
              <div>
                <input type="text" name="" id="" />
              </div>
              <div>
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
