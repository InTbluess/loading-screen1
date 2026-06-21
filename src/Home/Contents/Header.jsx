import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const navButtons = ["Home", "Work", "About"];

export default function Header() {
  return (
    <div className="header min-w-full h-32 flex flex-row justify-between items-center  ">
      <nav className="h-full w-64 flex flex-col justify-between">
        {navButtons.map((buttonText, index) => (
          <div key={buttonText} className="flex-1 overflow-hidden">
            <motion.button
              className="w-full h-full text-white border-b border-white flex justify-between items-center opacity-60 hover:opacity-100 transition-all duration-300"
              initial={{ y: 100 }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {buttonText}
              <ArrowUpRight size={16} />
            </motion.button>
          </div>
        ))}
      </nav>

      <div className="  w-64 flex justify-center items-center overflow-hidden ">
        
      </div><div className="  w-64 flex justify-center items-center overflow-hidden ">
      
      </div>

      <div id="title" className="h-full w-64 flex flex-col justify-between">
        <div className="flex-1 overflow-hidden flex items-center justify-center">
          <motion.h1
            className="text-white text-6xl translate-y-1"
            initial={{ y: 100 }}
            animate={{ y: "0%" }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            MEDIA
          </motion.h1>
        </div>

        <div className="flex-1 overflow-hidden flex items-center justify-center ">
          <motion.h1
            className="text-white text-6xl -translate-y-2"
            initial={{ y: 100 }}
            animate={{ y: "0%" }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            DIAME
          </motion.h1>
        </div>
      </div>

      <div className="w-64 flex justify-center items-center overflow-hidden ">
        <motion.span
          className="text-white text-5xl -translate-y-1 font-light"
          initial={{ y: 100, rotate: 360 }}
          animate={{ y: "0%", rotate: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          +
        </motion.span>
      </div>
      <div className="w-64 h-16 flex justify-center items-center overflow-hidden ">
        <motion.div
          className=" -translate-y-1 font-light flex flex-col justify-center items-center"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h1 className=" font-normal text-white text-[1.3rem] flex-1 translate-y-1.5">Indranil</h1> 
          <h1 className=" font-normal text-white/70 text-[1.2rem] flex-1 -translate-y-1">[Since 2023]</h1> 
        </motion.div>
      </div>

      <div className="w-64 flex justify-end items-center overflow-hidden ">
        <motion.button
          className="text-black bg-white h-16 w-48 font-medium text-[1.4rem]"
          initial={{ y: 200 }}
          animate={{ y: "0%" }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Let's Talk
        </motion.button>
      </div>
    </div>
  );
}
