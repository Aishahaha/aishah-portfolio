import { motion } from "framer-motion";
import Marquee from "@/components/Marquee";
import Tagging from "@/components/Tagging";
function Home() {
  return (
    <main className="main-container">
      <section className="max-w-7xl mx-auto px-6 pt-15 pb-16">
        <motion.h1
          className="font-serif text-5xl md:text-6xl lg:text-6xl leading-[1.05] text-neutral-900 max-w-2xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Building things
          <br />
          for the <em className="font-serif italic">web.</em>
        </motion.h1>
        <motion.h1
          className="mt-5 text-lg max-w-lg leading-tight"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          Frontend developer based in Singapore, focused on clean UI and great
          experiences.
        </motion.h1>
        <motion.div
          className=""
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.17 }}
        >
          <Tagging />
        </motion.div>
      </section>
      <Marquee />
    </main>
  );
}

export default Home;
