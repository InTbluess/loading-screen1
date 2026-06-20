// import {motion} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const navButtons = ["Home", "Work", "About"];

export default function Home() {
  return (
    <div className="Home bg-black h-screen min-w-full px-10 py-5">
      <div className="header border-amber-950 border min-w-full h-32 flex flex-row justify-between ">
        <nav className=" h-full w-64 flex flex-col justify-between">
          {navButtons.map((buttonText) => {
            return (
              <button className="w-full flex-1 text-white border-b border-white flex flex-row justify-between items-center opacity-60 hover:opacity-100 transition-all duration-300 ">
                {buttonText}
                <ArrowUpRight size={16} />
              </button>
            );
          })}
        </nav>
        <div id="logo" className=" text-white border border-white h-full w-64 flex flex-col justify-between">
            <h1 className=" text-white border border-white flex flex-1 justify-center items-center text-6xl ">MEDIA</h1>
            <h1 className=" text-white border border-white flex flex-1 justify-center items-center text-6xl ">DIAME</h1>
        </div>
        <div className="border border-white h-full w-64 flex flex-col justify-between"></div>
      </div>
    </div>
  );
}
