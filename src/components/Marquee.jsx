import { motion } from "framer-motion";

import hero1 from "../assets/homepage/hero-1.png";
import hero2 from "../assets/homepage/hero-2.png";
import hero3 from "../assets/homepage/hero-3.png";
import hero4 from "../assets/homepage/hero-4.png";
import hero5 from "../assets/homepage/hero-5.png";
import hero6 from "../assets/homepage/hero-6.png";
import hero7 from "../assets/homepage/hero-7.png";

const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];

function Marquee() {
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {[...images, ...images].map((src, i) => (
          <div key={i} className="shrink-0">
            <img
              src={src}
              alt=""
              className="h-65 w-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
