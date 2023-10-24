import React from 'react'
import { LightBox } from './light-box'
import { Metadata } from 'next'
import { motion } from 'framer-motion'
import Particles from './particles'

export function Aboutus() {
  return (
    <section
        id="about-us"
        className="container space-y-6 bg-slate-50 -z-20 animate-fade-right dark:bg-transparent md:py-6"
        aria-label="about us section"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-5xl  leading-[1.1] mb-10  md:text-6xl">
            About Us
          </h2>
          <p className="max-w-[42rem] leading-normal text-2xl text-muted-foreground sm:text-lg sm:leading-8">
            We have worked with some of the best brands in the industry.
          </p> 
        </div>
        <div className="mx-auto flex-col flex grid justify-center gap-4 sm:grid-cols-2 md:max-w-[80rem] justify-between md:grid-cols-1">
          <div className="flex md:flex-row flex-col ">
           
        </div>
        
        </div>
      </section>

  )
}

export default Aboutus