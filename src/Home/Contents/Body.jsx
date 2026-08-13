import { motion } from "framer-motion";
import img10 from "../../assets/images/img10.jpg";
import img11 from "../../assets/images/img11.jpg";
import Header from "./Header.jsx";

const bodyText = ["CREATIVE DIGITAL", "PARTNER GROW", "ENGAGEMENT"];

export default function body() {
  return (
    <>
      <Header />
      <div className="body pt-10 flex flex-row items-center relative w-full h-full">
        <div className="z-10 left left-0 bottom-0 absolute flex flex-col justify-end items-start w-2/3 h-1/2">
          {bodyText.map((line, index) => (
            <div key={index} className="overflow-hidden">
              <motion.h1
                className="text-white text-bold text-9xl"
                initial={{
                  y: 110,
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {index === 1 ? (
                  <div className="flex flex-row items-center ">
                    <span>PARTNER</span>

                    <img
                      src={img10}
                      alt=""
                      className="mx-10 w-64 h-30 object-cover rounded-full "
                    />

                    <span>GROW</span>
                  </div>
                ) : (
                  line
                )}
              </motion.h1>
            </div>
          ))}
        </div>
        <div className="z-0 absolute right-0 top-8 w-3/7 h-[calc(100%-2rem)] overflow-hidden">
          <motion.img
            src={img11}
            alt="image"
            className="w-full h-full object-cover object-center"
            initial={{ y: 1000, scale: 1.15 }}
            animate={{ y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              scale: {
                duration: 20,
                ease: "linear",
                delay: 1.2,
              },
            }}
          />
        </div>
      </div>
    </>
  );
}
