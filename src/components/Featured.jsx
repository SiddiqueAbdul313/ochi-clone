/* eslint-disable react/jsx-key */
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Featured() {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const refLeft = useRef(null);
  const refRight = useRef(null);
  const cards = [useAnimation(), useAnimation()];
  const [isHovering, setHovering] = useState(false);

  useEffect(() => {
    const observerLeft = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controlsLeft.start("visible");
        }
      },
      { threshold: 0.5 }
    );

    const observerRight = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controlsRight.start("visible");
        }
      },
      { threshold: 0.5 }
    );

    if (refLeft.current) {
      observerLeft.observe(refLeft.current);
    }

    if (refRight.current) {
      observerRight.observe(refRight.current);
    }

    return () => {
      if (refLeft.current) {
        observerLeft.unobserve(refLeft.current);
      }
      if (refRight.current) {
        observerRight.unobserve(refRight.current);
      }
    };
  }, [controlsLeft, controlsRight]);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const cardHoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 0.98, transition: { ease: "easeOut", duration: 0.3 } },
  };

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-10 bg-zinc-200">
      <div className="w-full px-10 border-b-[1px] border-zinc-400 pb-20">
        <h1 className="text-7xl font-[neue-montreal-light] text-black font-bold tracking-wide">
          Featured Projects
        </h1>
      </div>
      <div className="px-5">
        <div className="cards w-full flex flex-col sm:flex-col md:flex-row gap-10 mt-5 md:mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            variants={cardHoverVariants}
            initial="initial"
            whileHover="hover"
            className="cardcontainer relative w-full md:w-1/2 sm:h-[70vh]"
          >
            <h1 className="absolute flex sm:right-0 -translate-x-[0%] overflow-hidden sm:-translate-x-[30%] top-1/2 -translate-y-1/2 text-[#cdea68] z-10 text-9xl scale-x-75 font-[neue-montreal] font-extrabold -mb-20">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{
                    ease: [],
                    delay: index * 0.03,
                    easings: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block text-[8vw]"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              ref={refLeft}
              initial="hidden"
              animate={controlsLeft}
              variants={fadeInVariants}
              className="card w-full h-full rounded-xl bg-zinc-400 overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/3471423/pexels-photo-3471423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="left image"
                className="w-full h-full bg-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            variants={cardHoverVariants}
            initial="initial"
            whileHover="hover"
            className="cardcontainer relative w-full md:w-1/2 sm:h-[70vh]"
          >
            <h1 className="absolute flex sm:left-0 -translate-x-[0%] sm:translate-x-[30%] overflow-hidden top-1/2 md:-translate-y-1/2 text-[#cdea68] z-10 text-9xl scale-x-75 font-[neue-montreal] font-extrabold -mb-20">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{
                    ease: [],
                    delay: index * 0.03,
                    easings: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block text-[8vw]"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              ref={refRight}
              initial="hidden"
              animate={controlsRight}
              variants={fadeInVariants}
              className="card w-full h-full rounded-xl bg-zinc-400 overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="right image"
                className="w-full h-full bg-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
