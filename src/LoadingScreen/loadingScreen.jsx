import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import "./fonts.css";
import Header from './Header.jsx'

import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";

const Images = [img1, img2, img3, img4, img5, img6, img7];

const rotations = [
  0, // img1
  10, // img2
  -20, // img3
  20, // img4
  -10, // img5
  -25, // img6
  0, // img7
];

export default function LoadingScreen({ onFinish }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 3,
      onUpdate(value) {
        setProgress(Math.round(value));
      },
      onComplete() {
        setLoading(false);
      },
    });

    return () => controls.stop();
  }, []);

  const loaderVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.8,
      duration: 0.75,
      ease: "easeInOut",
    },
  },
};

  return (
    <div className="bg-black">
      <motion.div
      className="px-10 py-5 h-screen w-full flex flex-wrap gap-4 bg-black relative overflow-hidden "
      variants={loaderVariants}
      animate={loading ? "visible" : "hidden"}
      onAnimationComplete={() => {
        if (!loading) {
          onFinish();
        }
      }}
      >
      <Header/>
      <div className="absolute flex flex-col justify-between  h-50 w-[calc(100vw-100px)] top-1/2 left-13 -translate-y-1/2">
        <motion.div
          id="border-top"
          className="h-1 bg-white origin-left rounded-2xl"
          initial={{
            scaleX: 0.5,
            opacity: 0,
          }}
          animate={{
            scaleX: 1,
            opacity: 0.5,
          }}
          transition={{
            duration: 0.9,
          }}
        ></motion.div>

        <motion.h1
          style={{ y: "10px", fontFamily: 'Angelone'}}
          className="absolute  top-1/2 left-0 -translate-y-1/2 text-white text-[7.5rem] font-light whitespace-nowrap z-0"
          initial={{ x: "30%", opacity: 0 }}
          animate={{ x: "-100%", opacity: 1 }}
          transition={{
            x: {
              duration: 15,
              ease: "linear",
            },
            opacity: {
              duration: 2.5,
            },
          }}
        >
          MEDIA CREATIVE DIGITAL PARTNER
        </motion.h1>

        <motion.div
          id="border-top"
          className="h-1 bg-white origin-right rounded-2xl"
          initial={{
            scaleX: 0.5,
            opacity: 0,
          }}
          animate={{
            scaleX: 1,
            opacity: 0.5,
          }}
          transition={{
            duration: 0.9,
          }}
        ></motion.div>
      </div>
      {Images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`image-${index}`}
          className="absolute top-1/2 left-1/2 w-72 h-72 object-cover"
          style={{ zIndex: index }}
          initial={{ x: "-50%", y: "-50%", scale: 0, opacity: 0, rotate: -90 }}
          animate={{ scale: 1, opacity: 1, rotate: rotations[index] }}
          transition={{ duration: 0.25, delay: 0.75 + index * 0.3 }}
        />
      ))}
      <motion.div
        className="absolute bottom-8 left-8 text-8xl text-white"
        style={{ fontFamily: "MyFont" }}
      >
        {progress}%
      </motion.div>
    </motion.div>
    </div>
  );
}
