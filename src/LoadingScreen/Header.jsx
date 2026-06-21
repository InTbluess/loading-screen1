import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <motion.div
      className="header min-w-full h-32 flex flex-row justify-between items-center "
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.9}}
    >
      <div className="h-full w-64 flex justify-start items-center ">
        <Menu
          size={64}
          color="white"
          strokeWidth={1}
          className="ml-0 -translate-x-2"
        />
      </div>

      <div className="  w-64 flex justify-center items-center overflow-hidden "></div>
      <div className="  w-64 flex justify-center items-center overflow-hidden ">
        <span className="text-white text-5xl -translate-y-1 font-light">+</span>
      </div>

      <div id="title" className="h-full w-64 flex flex-col justify-between ">
        <div className="flex-1 overflow-hidden flex items-center justify-center">
          <h1 className="text-white text-6xl translate-y-1">MEDIA</h1>
        </div>

        <div className="flex-1 overflow-hidden flex items-center justify-center ">
          <h1 className="text-white text-6xl -translate-y-2">DIAME</h1>
        </div>
      </div>

      <div className="w-64 flex justify-center items-center overflow-hidden ">
        <span className="text-white text-5xl -translate-y-1 font-light">+</span>
      </div>
      <div className="w-64 flex justify-center items-center overflow-hidden "></div>

      <div className="w-64 flex justify-end items-center overflow-hidden ">
        <button className="text-black bg-white h-16 w-48 font-medium text-[1.4rem]">
          Let's Talk
        </button>
      </div>
    </motion.div>
  );
}
