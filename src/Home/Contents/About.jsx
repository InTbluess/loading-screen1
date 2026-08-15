import { motion, useAnimation } from "framer-motion";
import Images from "../../Images.js";
const aboutText = [
  "At Media Diem, We Specialize In Building Brands That Captivate And Command Attention In The Ever-Evolving Digital Landscape. Partnering With Design Studios And Independent Creators, We Craft Impactful Social Media And Digital Experiences That Amplify Your Brand’s Identity And Intent.",
  "We Take Your Ideas And Transform Them Into Strong, Creative Strategies That Seamlessly Blend Form, Function, And Branding. We Bridge That Gap. Combining Technical Expertise With A Keen Eye For Branding And Design, We Bring Your Vision To Life.",
  "In Today’s Fast-Paced Social Media World, Standing Out Requires More Than Just Great Design—It Demands Strategy, Creativity, And Precision. Too Often, A Brand’s Message Gets Diluted During Execution. From Crafting Visually Stunning Campaigns To Ensuring Consistency Across Platforms, We Help Your Brand Engage, Inspire, And Grow In A Competitive Digital Space.",
];

export default function About() {
  const controls = useAnimation();
  const reveal = {
    hidden: {
      y: "100%",
      opacity: 0,
    },

    visible: {
      y: "0%",
      opacity: 1,
    },
  };

  return (
    <section className="mt-50 mb-10 pt-5 min-h-screen w-full flex flex-col justify-start items-center text-white">
      <motion.div
        id="border-top"
        className="w-full h-0.5 bg-white origin-right rounded-2xl"
        initial={{
          scaleX: 0.5,
          opacity: 0,
        }}
        whileInView={{
          scaleX: 1,
          opacity: 0.5,
        }}
        viewport={{
          once: true,
          margin: "0px 0px -100px 0px",
        }}
        onViewportEnter={() => controls.start("visible")}
        transition={{
          duration: 1,
        }}
      ></motion.div>
      <div
        style={{ fontFamily: "open-sans-light " }}
        className="text-[17px] text-white/70 pt-5 flex-1 grid grid-cols-4 grid-rows-[0.1fr_0.5fr_0.6fr_1.3fr] gap-y-10 gap-x-20 w-full h-full"
      >
        <div className="col-span-2 row-span-4">
          <div className="overflow-hidden bg-transparent">
            <motion.div
              variants={reveal}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 1.2,
                ease: [0.8, 0, 0.1, 1],
              }}
            >
              [ 01 ]
            </motion.div>
          </div>
        </div>
        {/* About Text */}
        <div id="AboutText">
          <div className=" overflow-hidden bg-transparent">
            <motion.div
              variants={reveal}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.8, 0, 0.1, 1],
              }}
            >
              About
            </motion.div>
          </div>
        </div>
        {/* Approach Angle */}
        <div id="ApproachAngle">
          <div className=" overflow-hidden bg-transparent">
            <motion.div
              variants={reveal}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.8, 0, 0.1, 1],
              }}
            >
              Approach Angle
            </motion.div>
          </div>
        </div>

        <div className="text-white pr-15 ">
          <div className=" overflow-hidden bg-transparent">
            <motion.div
              variants={reveal}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.8, 0, 0.1, 1],
              }}
            >
              {aboutText[0]}
            </motion.div>
          </div>
        </div>
        <div className="text-white pr-15 ">
          <div className=" overflow-hidden bg-transparent">
            <motion.div
              variants={reveal}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 1.2,
                delay: 0.6,
                ease: [0.8, 0, 0.1, 1],
              }}
            >
              {aboutText[1]}
            </motion.div>
          </div>
        </div>
        <div className="text-white pr-15 ">
          <div className=" overflow-hidden bg-transparent">
            <motion.div
              variants={reveal}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.8, 0, 0.1, 1],
              }}
            >
              {aboutText[2]}
            </motion.div>
          </div>
        </div>
        {/* + */}
        <div className="text-white pr-15 flex flex-row justify-end items-end">
          <div className=" overflow-hidden bg-transparent">
            <motion.div
              className="text-[35px]"
              variants={reveal}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.8, 0, 0.1, 1],
              }}
            >
              +
            </motion.div>
          </div>
        </div>
        {/* Images */}
        <div className=" flex flex-row justify-start items-end">
          <div className="mr-5 ">
            <motion.div
              className=" overflow-hidden bg-transparent"
              initial={{
                x: "100%",
                opacity: 0,
              }}
              animate={controls}
              variants={{
                hidden: { x: "100%", opacity: 0 },
                visible: { x: "0%", opacity: 1 },
              }}
              transition={{
                duration: 2,
                delay: 0.6,
                ease: [0.8, 0, 0.1, 1],
              }}
            >
              <motion.img
                className="h-45 w-45 object-cover"
                src={Images[4]}
                alt="About Image 1"
                initial={{ scale: 1.8 }}
                animate={controls}
                variants={{
                  hidden: { scale: 1.8 },
                  visible: { scale: 1.4 },
                }}
                transition={{
                  scale: {
                    duration: 15,
                    delay: 0.6,
                    ease: "linear",
                  },
                }}
              />
            </motion.div>
          </div>
          <div className="">
            <motion.div
              className=" overflow-hidden bg-transparent"
              initial={{
                x: "100%",
                opacity: 0,
              }}
              animate={controls}
              variants={{
                hidden: { x: "300%", opacity: 0 },
                visible: { x: "0%", opacity: 1 },
              }}
              transition={{
                duration: 3,
                delay: 0.8,
                ease: [0.8, 0, 0.1, 1],
              }}
            >
              <motion.img
                className="h-45 w-45 object-cover"
                src={Images[3]}
                alt="About Image 1"
                initial={{ scale: 1.8 }}
                animate={controls}
                variants={{
                  hidden: { scale: 1.8 },
                  visible: { scale: 1.4 },
                }}
                transition={{
                  scale: {
                    duration: 15,
                    delay: 0.6,
                    ease: "linear",
                  },
                }}
              />
            </motion.div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
}
