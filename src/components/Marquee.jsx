// import { motion } from "framer-motion";
import "../App.css";

function Marquee() {
  return (
    <div className="w-full pt-28 pb-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d42] overflow-hidden">
      <div className="text border-t-[1px] border-b-[1px] border-[#457d76] flex gap-20 whitespace-nowrap">
        {[...Array(4)].map((_, index) => (
          <h1
            key={index}
            className="text-[24vw] font-[founders-grotesk] uppercase sm:-mb-8"
          >
            We are ochi
          </h1>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
