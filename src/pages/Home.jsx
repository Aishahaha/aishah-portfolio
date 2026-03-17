import { motion } from "framer-motion";
import Marquee from "@/components/Marquee";
import Tagging from "@/components/Tagging";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import ProjectCard from "@/components/ProjectCard";

import profile from "../assets/homepage/profile-2.png";
import healthhub from "../assets/homepage/hero-4.png";
import reerth from "../assets/homepage/hero-1.png";
import chope from "../assets/homepage/hero-2.png";

function Home() {
  return (
    <main className="main-container">
      <section className="pt-15 pb-30">
        <div className="max-w-7xl mx-auto px-6 pb-16">
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
          <motion.p
            className="mt-5 text-lg max-w-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            Frontend developer based in Singapore, focused on clean UI and great
            experiences.
          </motion.p>
          <motion.div
            className=""
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.17 }}
          >
            <Tagging />
            <div className="mt-7 flex gap-3">
              <PrimaryButton href="/contact">Resume</PrimaryButton>
              <SecondaryButton href="/contact">Get in Touch</SecondaryButton>
            </div>
          </motion.div>
        </div>
        <Marquee />
      </section>
      <section className="px-6 bg-muted py-16 mb-30">
        <div className="max-w-7xl mx-auto ">
          <div className="flex items-center justify-center">
            <div>
              <h6 className="text-sm tracking-wider uppercase mb-1">
                About me
              </h6>
              <motion.h1
                className="font-serif text-5xl md:text-6xl lg:text-6xl leading-[1.05] text-neutral-900 max-w-2xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.19 }}
              >
                I build things people{" "}
                <em className="font-serif italic">actually use.</em>
              </motion.h1>
              <motion.p
                className="mt-5 text-lg max-w-lg "
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                From Shopify storefronts to HealthHub microsites, I've spent 6+
                years crafting digital experiences at agencies like TBWA and
                Hogarth. Now I'm expanding into full-stack — Java, MySQL, Docker
                — and building things end to end.
              </motion.p>
              <section className="bg-muted py-7">
                <div className="max-w-5xl mx-auto">
                  <div className="flex gap-16">
                    <div>
                      <div className="text-4xl font-medium text-neutral-900">
                        6+
                      </div>
                      <div className="text-sm text-neutral-500 mt-1">
                        Years experience
                      </div>
                    </div>
                    <div>
                      <div className="text-4xl font-medium text-neutral-900">
                        20+
                      </div>
                      <div className="text-sm text-neutral-500 mt-1">
                        Projects delivered
                      </div>
                    </div>
                    <div>
                      <div className="text-4xl font-medium text-neutral-900">
                        30+
                      </div>
                      <div className="text-sm text-neutral-500 mt-1">
                        Clients served
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <SecondaryButton href="/contact">Get in Touch</SecondaryButton>
            </div>
            <motion.div
              className="shrink-0"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [-3, 3, -3] }}
              viewport={{ once: false }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <img src={profile} alt="" className="h-100 w-auto" />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="pb-30">
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <motion.h1
            className="font-serif text-5xl md:text-6xl lg:text-6xl leading-[1.05] text-neutral-900 max-w-2xl mb-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.19 }}
          >
            My
            <em className="font-serif italic">Projects</em>
          </motion.h1>
          <motion.div
            className=""
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <ProjectCard
                title="HealthHub — Healthy Ageing"
                tags={["Vue.js", "GSAP", "Sitecore"]}
                description="High-performance microsite built with Vue.js and GSAP animations for Singapore's national health platform."
                link="https://www.healthhub.sg/programmes/healthy-ageing"
                image={healthhub}
              />
              <ProjectCard
                title="RE:ERTH"
                tags={["Shopify", "Liquid"]}
                description="Skincare e-commerce with complex animations."
                link="https://reerth.com"
                image={reerth}
              />
              <ProjectCard
                title="Chope"
                tags={["WordPress", "AOS.js"]}
                description="Multi-country restaurant platform."
                link="https://restaurants.chope.co/singapore"
                image={chope}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Home;
