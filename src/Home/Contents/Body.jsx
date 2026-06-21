import {motion} from 'framer-motion';
import img9 from '../../assets/images/img5.jpg';
export default function body() {
  return (
    <div className="body pt-10 flex flex-row items-center relative w-full h-full border border-amber-200">
      <div className="left left-0 bottom-0 absolute border-2 border-white w-2/3 h-1/2">

      </div>
      <div className="absolute right-0 top-8 w-3/7 h-[calc(100%-2rem)] overflow-hidden">
        <motion.img
          src={img9}
          alt="image"
          className="w-full h-full object-cover object-center"
          initial={{ y: 10100 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  );
}
