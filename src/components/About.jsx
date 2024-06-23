import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import "../App.css";
import { GoArrowUpRight } from "react-icons/go";

function About() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.12"
      className="w-full py-20 bg-[#ceeb67] rounded-tl-3xl rounded-tr-3xl text-black px-6 md:px-12 lg:px-20"
    >
      <h1 className="font-[neue-montreal] text-[6vw] tracking-wide md:text-[4vw] lg:text-[3.5vw] font-light leading-[5.5vw] md:leading-[4.5vw]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-5 border-t-[1px] mt-20 pt-10 border-[#9aad53]">
        <div className="w-full md:w-1/2">
          <h1 className="text-[7vw] md:text-7xl">Our approach:</h1>
          <button className="p-2 md:px-10 md:py-6 mt-10 flex gap-5 md:gap-5 items-center bg-black rounded-full text-white uppercase">
            Read More
            <div className="w-10 h-10 flex items-center justify-center border-[1px] uppercase border-zinc-500 rounded-full">
            <GoArrowUpRight />
          </div>
          </button>
        </div>
        <div className="w-full h-auto md:w-1/2 sm:h-[70vh] relative bg-[#9aad53] flex justify-center items-center text-[#ceeb67] overflow-hidden rounded-2xl">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1.5 } },
            }}
            className="w-full h-full flex justify-center items-center"
          >
            <img
              src="https://images.pexels.com/photos/389819/pexels-photo-389819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Dynamic Image"
              className="sm:w-full sm:h-full bg-cover bg-center"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
