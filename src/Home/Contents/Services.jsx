import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="mt-10 h-screen w-full flex flex-col justify-center items-start ">

      {/* Top border */}
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
          duration: 1,
          ease: "easeOut",
        }}
      />

      {/* Grid */}
      <div
        style={{ fontFamily: "open-sans-light" }}
        className="
          relative
          text-[18px] text-white/70
          pt-5
          flex-1
          grid
          grid-cols-[3fr_3.5fr_3.5fr]
          grid-rows-4
          w-full
          min-w-0
        "
      >

        {/* ========================= */}
        {/* GRID CONTENT */}
        {/* ========================= */}

        {/* Column 1 */}
        <div className="row-span-4 flex items-start">
          [ 02 ]
        </div>

        {/* First row */}
        <div className="col-span-2 flex items-start">
          Box 2
        </div>

        {/* Second row */}
        <div className="row-span-2 flex items-start">
          Box 3
        </div>

        <div className="flex items-start">
          Box 4
        </div>

        {/* Third row */}
        <div className="flex items-start">
          Box 5
        </div>

        <div className="flex items-start">
          Box 6
        </div>

        {/* Fourth row */}
        <div className="flex items-start">
          Box 7
        </div>


        {/* ========================= */}
        {/* ANIMATED VERTICAL BORDERS */}
        {/* ========================= */}

        {/* Border between column 1 and column 2 */}
        <motion.div
          className="
            absolute
            top-[25%]
            bottom-0
            left-[30%]
            w-px
            bg-white/20
            origin-top
          "
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        />

        {/* Border between column 2 and column 3 */}
        <motion.div
          className="
            absolute
            top-[25%]
            bottom-0
            left-[65%]
            w-px
            bg-white/20
            origin-top
          "
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
        />
        {/* Border end*/}
        <motion.div
          className="
            absolute
            top-[25%]
            bottom-0
            right-[0%]
            w-px
            bg-white/20
            origin-top
          "
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
        />


        {/* ========================= */}
        {/* ANIMATED HORIZONTAL BORDERS */}
        {/* ========================= */}

        {/* Row 1 → Row 2 */}
        <motion.div
          className="
            absolute
            top-[25%]
            left-[30%]
            right-0
            h-px
            bg-white/20
            origin-center
          "
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
        />

        {/* Row 2 → Row 3 */}
        <motion.div
          className="
            absolute
            top-[50%]
            left-[65%]
            right-0
            h-px
            bg-white/20
            origin-left
          "
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.45,
            ease: "easeOut",
          }}
        />

        {/* Row 3 → Row 4 */}
        <motion.div
          className="
            absolute
            top-[75%]
            left-[30%]
            right-0
            h-px
            bg-white/20
            origin-center
          "
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut",
          }}
        />
        {/* Row 3 → end */}
        <motion.div
          className="
            absolute
            top-full
            left-[30%]
            right-0
            h-px
            bg-white/20
            origin-center
          "
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.75,
            ease: "easeOut",
          }}
        />

      </div>
    </section>
  );
}