/* eslint-disable react/prop-types */
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import "../App.css";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function Marquee({ MarqueeText }) {
  const scrollTextControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      scrollTextControls.start({
        opacity: isScrolled ? 0 : 1,
        transition: { ease: "easeOut", duration: 0.5 },
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollTextControls]);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.05"
      className="w-full relative flex justify-center pt-28 pb-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d42] overflow-hidden"
    >
      <motion.span
        className="absolute flex items-center top-2 text-xl text-[#439c90]"
        animate={scrollTextControls}
      >
        <MdKeyboardDoubleArrowDown /> Scroll down <MdKeyboardDoubleArrowDown />
      </motion.span>
      <div className="text border-t-[1px] border-b-[1px] border-[#457d76] flex whitespace-nowrap">
        {[...Array(3)].map((_, index) => (
          <motion.h1
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
            key={index}
            className="text-[32vw] sm:text-[24vw] font-[founders-grotesk] uppercase -mb-10 md:-mb-28 lg:-mb-36 pr-8 sm:pr-20"
          >
            {MarqueeText}
          </motion.h1>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
