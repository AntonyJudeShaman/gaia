"use client";
import { LightBox } from "./light-box";
import { motion, useScroll } from "framer-motion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page of best architects in chennai",
};

export default function IndexPage() {
  return (
    <div className="">
      <motion.section
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.85 }}
        animate={{ y: "0%", opacity: 1 }}
        className="h-100 mt-40  space-y-6 pb-8 pt-6 md:pb-12 md:mt-6  lg:py-32"
        style={{ minHeight: "100vh" }}
      >
        <div className="container logo-font text-6xl text-wrapper font-heading flex max-w-[64rem] flex-col items-center gap-4 text-center">
          {/* <h1 className="font-semibold ">
            <Image src={logo} alt="Jude" className="h-15 w-20" />
          </h1> */}
          GAIA GEOSCIENCE PVT LTD
          </div>
      </motion.section>
    </div>
  );
}
