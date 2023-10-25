import React from "react"
import SwiperComponent from "@/components/client"

export function Aboutus() {
  return (
    <section
        id="about-us"
        className="container space-y-6 p-6 max-w-[78rem] bg-zinc-300 rounded animate-fade-right dark:bg-transparent md:py-6"
        aria-label="about us section"
      >
        <div className="mx-auto flex max-w-[78rem] p-6 rounded bg-slate-200 flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-5xl  leading-[1.1] mb-10  md:text-6xl">
            About Us
          </h2>
          <p className="max-w-[42rem] leading-normal text-2xl text-muted-foreground sm:text-lg sm:leading-8">
            We have worked with some of the best brands in the industry.
          </p> 
          <SwiperComponent/>
        </div>
        <div className="mx-auto flex-col flex grid justify-center gap-4 sm:grid-cols-2 md:max-w-[80rem] justify-between md:grid-cols-1">
          <div className="flex md:flex-row flex-col ">
           
        </div>
        
        </div>
      </section>

  )
}

export default Aboutus