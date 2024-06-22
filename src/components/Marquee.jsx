/* eslint-disable react/prop-types */
// import { motion } from "framer-motion";
import { motion } from "framer-motion";
import "../App.css";

function Marquee({ MarqueeText }) {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".03" className="w-full pt-28 pb-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d42] overflow-hidden">
      <div className="text border-t-[1px] border-b-[1px] border-[#457d76] flex whitespace-nowrap">
        {[...Array(2)].map((_, index) => (
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            key={index}
            className="text-[24vw] font-[founders-grotesk] uppercase -mb-10 md:-mb-28 lg:-mb-36 pr-28"
          >
            {MarqueeText}
          </motion.h1>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
