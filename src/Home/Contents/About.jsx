import { motion } from "framer-motion";

const aboutText = [
  "At Media Diem, We Specialize In Building Brands That Captivate And Command Attention In The Ever-Evolving Digital Landscape. Partnering With Design Studios And Independent Creators, We Craft Impactful Social Media And Digital Experiences That Amplify Your Brand’s Identity And Intent.",
  "We Take Your Ideas And Transform Them Into Strong, Creative Strategies That Seamlessly Blend Form, Function, And Branding. We Bridge That Gap. Combining Technical Expertise With A Keen Eye For Branding And Design, We Bring Your Vision To Life.",
  "In Today’s Fast-Paced Social Media World, Standing Out Requires More Than Just Great Design—It Demands Strategy, Creativity, And Precision. Too Often, A Brand’s Message Gets Diluted During Execution. From Crafting Visually Stunning Campaigns To Ensuring Consistency Across Platforms, We Help Your Brand Engage, Inspire, And Grow In A Competitive Digital Space.",
];

export default function About() {
  return (
    <section className="mt-50 pt-5 pb-20 min-h-screen w-full flex flex-col justify-start items-center border border-green-500 text-white">
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
        transition={{
          duration: 1.2,
        }}
      ></motion.div>
      <div className="text-white/70 pt-5 flex-1 grid grid-cols-4 grid-rows-[0.25fr_0.75fr_1fr_1fr] gap-y-5 gap-x-20 w-full h-full">
        <div className="col-span-2 row-span-4">[ 01 ]</div>
        <div className="border">About</div>
        <div className="border">Approach Angle</div>
        
        
        <div className="text-white pr-20 border">{aboutText[0]}</div>
        <div className="text-white pr-20 border">{aboutText[1]}</div>
        <div className="text-white pr-20 border">{aboutText[2]}</div>
        <div className="border"></div>
        <div className="border">8</div>
        <div className="border"></div>
      </div>
    </section>
  );
}
