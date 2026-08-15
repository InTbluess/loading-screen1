import { motion, useAnimation } from "framer-motion";
import Images from "../../Images.js";
import { ArrowRight } from "lucide-react";

const aboutText = [
  "At Media Diem, We Specialize In Building Brands That Captivate And Command Attention In The Ever-Evolving Digital Landscape. Partnering With Design Studios And Independent Creators, We Craft Impactful Social Media And Digital Experiences That Amplify Your Brand’s Identity And Intent.",
  "We Take Your Ideas And Transform Them Into Strong, Creative Strategies That Seamlessly Blend Form, Function, And Branding. We Bridge That Gap. Combining Technical Expertise With A Keen Eye For Branding And Design, We Bring Your Vision To Life.",
  "In Today’s Fast-Paced Social Media World, Standing Out Requires More Than Just Great Design—It Demands Strategy, Creativity, And Precision. Too Often, A Brand’s Message Gets Diluted During Execution. From Crafting Visually Stunning Campaigns To Ensuring Consistency Across Platforms, We Help Your Brand Engage, Inspire, And Grow In A Competitive Digital Space.",
];

const bigImageText = ["EVERY ", "SHOT TELLS ", "A STORY,"];

export default function About() {
  const controls = useAnimation();
  const getstartedControls = useAnimation();

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
    <section className="mt-50 mb-10 pt-5 min-h-screen w-full flex flex-col justify-start items-center text-white ">
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
        className="text-[18px] text-white/70 pt-5 flex-1 grid grid-cols-4 grid-rows-[0.1fr_0.5fr_0.6fr_1.1fr_1fr] gap-y-10 gap-x-10 w-full h-full"
      >
        {/* 01 */}
        <div className="col-span-2 row-span-3 ">
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
        <div id="AboutText" className="">
          <div className="overflow-hidden bg-transparent">
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
        <div id="ApproachAngle" className="">
          <div className="overflow-hidden bg-transparent">
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

        {/* Paragraph 1 */}
        <div className="text-white pr-35 ">
          <div className="overflow-hidden bg-transparent">
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

        {/* Paragraph 2 */}
        <div className="text-white pr-35 ">
          <div className="overflow-hidden bg-transparent">
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

        {/* Paragraph 3 */}
        <div className="text-white pr-35 ">
          <div className="overflow-hidden bg-transparent">
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
        <div className="text-white pr-15 flex flex-row justify-end items-end ">
          <div className="overflow-hidden bg-transparent">
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

        {/* Big Image */}
        <div className="col-span-2 row-span-2 flex justify-between items-end">
          <motion.div
            className="h-137 w-150 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "0px 0px -100px 0px",
            }}
            variants={{
              hidden: {},
              visible: {},
            }}
            onAnimationComplete={() => {
              getstartedControls.start("visible");
            }}
          >
            <motion.img
              src={Images[1]}
              alt="Big Image"
              className="w-full h-full object-cover object-center"
              variants={{
                hidden: {
                  y: "100%",
                },
                visible: {
                  y: "0%",
                },
              }}
              transition={{
                duration: 1,
                ease: [0.8, 0, 0.1, 1],
              }}
            />
          </motion.div>

          <div className="text-left h-full flex flex-col justify-end items-start text-white text-[50px] pl-6">
            {bigImageText.map((line, index) => (
              <div key={index} className="overflow-hidden">
                <motion.span
                  style={{ fontFamily: "open-sans-light" }}
                  className="leading-none block tracking-tight"
                  initial={{
                    y: "100%",
                  }}
                  animate={getstartedControls}
                  variants={{
                    hidden: { y: "100%" },
                    visible: { y: "0" },
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index === 0 ? 0 : index * 0.2,
                    ease: [0.5, 0, 0.1, 1],
                  }}
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="flex flex-row justify-start items-end ">
          {/* Image 1 */}
          <div className="mr-5">
            <motion.div
              className="overflow-hidden bg-transparent"
              initial={{
                x: "100%",
                opacity: 0,
              }}
              animate={controls}
              variants={{
                hidden: {
                  x: "100%",
                  opacity: 0,
                },
                visible: {
                  x: "0%",
                  opacity: 1,
                },
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
                  hidden: {
                    scale: 1.8,
                  },
                  visible: {
                    scale: 1.4,
                  },
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

          {/* Image 2 */}
          <div>
            <motion.div
              className="overflow-hidden bg-transparent"
              initial={{
                x: "100%",
                opacity: 0,
              }}
              animate={controls}
              variants={{
                hidden: {
                  x: "300%",
                  opacity: 0,
                },
                visible: {
                  x: "0%",
                  opacity: 1,
                },
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
                alt="About Image 2"
                initial={{ scale: 1.8 }}
                animate={controls}
                variants={{
                  hidden: {
                    scale: 1.8,
                  },
                  visible: {
                    scale: 1.4,
                  },
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

        {/* Empty grid cell */}
        <div className=""></div>
        {/* Empty grid cell */}
        <div className=""></div>
        {/* get started button */}
        <div className=" flex justify-between items-end">
          <div className=" w-full flex justify-between items-center">
            <div className=" overflow-hidden">
              <motion.div
                style={{ fontFamily: "open-sans-light", fontWeight: 400 }}
                className="text-white text-[40px] "
                initial={{
                  y: "100%",
                }}
                animate={getstartedControls}
                variants={{
                  hidden: { y: "100%" },
                  visible: { y: "0" },
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                  ease: [0.8, 0, 0.1, 1],
                }}
              >
                Get Started
              </motion.div>
            </div>

            <div className=" group overflow-hidden">
              <motion.div
                className="
                  border-white/60 border-3 rounded-full
                  transition-colors duration-500
                  ease-[cubic-bezier(0.8,0,0.1,1)]
                  hover:border-black hover:bg-white/70
                "
                initial={{
                  x: "100%",
                }}
                animate={getstartedControls}
                variants={{
                  hidden: { x: "100%", opacity: 0 },
                  visible: { x: "0", opacity: 1 },
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                  ease: [0.8, 0, 0.1, 1],
                }}
              >
                <ArrowRight
                  size={100}
                  strokeWidth={1.2}
                  className="text-white opacity-100 scale-x-120 m-10 
                  group-hover:text-black transition-colors duration-500"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
