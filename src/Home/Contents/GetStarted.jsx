import Images from "../../Images";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function GetStarted() {
  const heroText = ["SEAMLESS", "DIGITAL", "EXPERIENCES"];

  const controls = useAnimation();

  const reveal = {
    hidden: {
      x: "-100%",
    },

    visible: {
      x: "0%",
    },
  };

  return (
    <section className="mt-10 h-screen w-full flex justify-center items-center">
      <div className="h-[75%] w-full  overflow-hidden relative">
        <motion.div
          className="absolute w-full h-full bg-black/70"
          initial={{
            opacity: 1,
          }}
          whileInView={{
            opacity: 0,
          }}
          viewport={{
            once: true,
            margin: "0px 0px -200px 0px",
          }}
          onViewportEnter={() => controls.start("visible")}
          transition={{
            duration: 4,
          }}
        ></motion.div>
        <div className="absolute w-full h-full flex justify-center items-center">
          <div className=" w-[80%] h-[50%] flex justify-between items-center">
            <div className=" overflow-hidden h-full flex-1">
              <motion.div
                style={{ fontFamily: "juturu", fontSize: 160 }}
                className=" h-[50%] w-full text-left text-white flex justify-start items-center"
                variants={reveal}
                initial="hidden"
                animate={controls}
                transition={{
                  duration: 2,
                  ease: [0.8, 0, 0.1, 1],
                }}
              >
                {heroText[0]}
              </motion.div>
              <motion.div
                style={{ fontFamily: "juturu", fontSize: 160 }}
                className=" h-[50%] w-full text-left text-white  flex justify-start items-center"
                variants={reveal}
                initial="hidden"
                animate={controls}
                transition={{
                  duration: 2.5,
                  delay: 0.1,
                  ease: [0.8, 0, 0.1, 1],
                }}
              >
                {heroText[2]}
              </motion.div>
            </div>
            <div className=" h-full w-[35%]">
              <div className="overflow-hidden h-[50%]  w-full ">
                <motion.div
                  style={{ fontFamily: "juturu", fontSize: 160 }}
                  className=" h-full w-full text-left text-white  flex justify-start items-center"
                  variants={reveal}
                  initial="hidden"
                  animate={controls}
                  transition={{
                    duration: 2,
                    delay: 0.1,
                    ease: [0.8, 0, 0.1, 1],
                  }}
                >
                  {heroText[1]}
                </motion.div>
              </div>
              <div className=" h-[50%] w-full flex justify-start items-center">
                <motion.div
                  className="flex justify-around item-center border-2 border-white/40 h-[80%] w-full -translate-x-8 translate-y-4 rounded-full text-center content-center text-4xl text-white backdrop-blur-sm hover:backdrop-blur-md transform-transiton duration-500"
                  variants={{
                    hidden: { scale: 0 },
                    visible: { scale: 1 },
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{
                    duration: 0.7,
                    delay: 1,
                    ease: [0.5, 0, 0.05, 1],
                  }}
                >
                  <span className="pl-10 content-center">Get Started</span>
                  <ArrowRight
                    size={80}
                    strokeWidth={1.1}
                    className="text-white opacity-100 scale-x-120 m-10 -translate-y-3"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-full h-full object-cover object-bottom"
          src={Images[5]}
          alt="Image"
        />
      </div>
    </section>
  );
}
