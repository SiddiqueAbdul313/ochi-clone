function Featured() {
  return (
    <div className="w-full py-10 bg-zinc-200 ">
      <div className="w-full px-10 border-b-[1px] border-zinc-400 pb-20">
        <h1 className="text-7xl font-[neue-montreal-light] text-black font-bold tracking-wide ">
          Featured Projects
        </h1>
      </div>
      <div className="px-5">
        <div className="cards w-full flex flex-col sm:flex-row gap-10 mt-5 md:mt-10">
          <div className="cardcontainer relative w-full md:w-1/2 h-[70vh]">
            <h1 className="absolute sm:left-full translate-x-[30%] sm:-translate-x-[40%] top-1/2 -translate-y-1/2 text-[#cdea68] z-10 text-9xl scale-x-75 font-[founders-grotesk]  leading-[0rem] font-bold -mb-20 ">
              {"FYDE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl  bg-green-500 overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="left image"
                className="w-full h-full bg-cover"
              />
            </div>
          </div>
          <div className="cardcontainer relative w-full md:w-1/2 h-[70vh] ">
            <h1 className="absolute sm:right-full translate-x-[30%] sm:translate-x-[40%] top-1/2 md:-translate-y-1/2 text-[#cdea68] z-10 text-9xl scale-x-75 font-[founders-grotesk]  leading-[0rem] font-bold -mb-20 ">
              {"VISE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl bg-green-500 overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="left image"
                className="w-full h-full bg-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
