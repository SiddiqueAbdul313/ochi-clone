import "../App.css";
import { GoArrowUpRight } from "react-icons/go";

function LandingPage() {
  const headings = ["We Create", "Eye-Opening", "Presentations"];

  return (
    <div className="w-full max-h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-20 px-4 sm:mt-28 sm:px-10 md:mt-40 md:px-20 lg:mt-52 lg:px-28">
        {headings.map((heading, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex overflow-hidden">
              {index === 1 && (
                <div className="mr-1 rounded-sm w-[12vw] sm:w-[9vw] md:w-[7vw] h-[8vw] sm:h-[6vw] md:h-[4.5vw] relative bg-red-500"></div>
              )}
              <h1 className="flex uppercase h-full text-[12vw] sm:text-[9vw] md:text-[7vw] leading-[12vw] sm:leading-[9vw] md:leading-[7vw] font-[founders-grotesk] font-bold">
                {heading}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] font-[neue-montreal] border-zinc-800 mt-12 sm:mt-20 md:mt-28 md:mb-20 flex flex-col md:flex-row justify-between items-center py-5 px-4 sm:px-10 md:px-20">
        <div className="flex flex-col md:flex-row text-center md:text-left items-center md:items-start justify-center md:justify-between">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p
              className="text-lg sm:text-xl md:text-2xl font-light tracking-wider mb-2 md:mb-0 md:mr-4"
              key={index}
            >
              {item}
            </p>
          ))}
        </div>

        <div className="start flex md:flex-row items-center gap-3 mt-5 md:mt-0">
          <div className="px-5 py-2 border-[2px] border-zinc-500 font-light text-md sm:text-lg md:text-sm tracking-wider uppercase rounded-full">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] uppercase border-zinc-500 rounded-full">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
