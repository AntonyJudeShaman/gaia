import React from "react";
import { FAQAccordion } from "@/components/faq";
import { MainNav } from "@/components/main-nav";
import Nav from "@/components/nav";
import { marketingConfig } from "config/marketing";
import { SiteFooter } from "@/components/site-footer";
import Questions from "@/components/still-questions";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service",
  description: "Services offered by us",
}

function page() {
  return (
    <>
    <title>Services | Gaia</title>
    <div
      className="min-h-screen animate-fade-in"
    >
      <header className="container  z-40 bg-zinc-950 text-white border-2 border-blue-500 custom-rounded-bottom">
          <div className="flex h-20 items-center justify-between py-6">
            <MainNav items={marketingConfig.mainNav} />
            
          </div>
        </header>
      <Nav />
      <p className="text-5xl font-heading font-semibold  mb-5 mt-10 text-center text-white ">
        Services
      </p>
      <div style={{display:"flex",flexDirection:"column",marginTop:"5%",textAlign:"center"}}>
        <div style={{display:"flex",paddingLeft:"10%",justifyContent:"space-around",marginBottom:"10%"}}>
          <Link style={{width:"20%",height:"30%"}} href={"/service1"}>
            <div style={{padding:"10%",margin:"0%",color:"white",backgroundColor:"black"}}>
              Geotechnical Investigations
            </div>
          </Link>
          <Link style={{width:"20%",height:"30%"}} href={"/service2"}>
            <div style={{padding:"10%",margin:"0%",color:"white",backgroundColor:"black"}}>
              Geotechnical Laboratory
            </div>
          </Link>
          <Link style={{width:"20%",height:"30%"}} href={"/service3"}>
            <div style={{padding:"10%",margin:"0%",color:"white",backgroundColor:"black"}}>
              Geophysical Surveys
            </div>
          </Link>
        </div>
        <div style={{display:"flex",paddingLeft:"10%",justifyContent:"space-around"}}>
          <Link style={{width:"20%",height:"30%"}} href={"/service4"}>
            <div style={{padding:"10%",margin:"0%",color:"white",backgroundColor:"black"}}>
              Geoconsulting
            </div>
          </Link>
          <Link style={{width:"20%",height:"30%"}} href={"/service5"}>
            <div style={{padding:"10%",margin:"0%",color:"white",backgroundColor:"black"}}>
              Pile Testing
            </div>
          </Link>
          <Link style={{width:"20%",height:"30%"}} href={"/service6"}>
            <div style={{padding:"10%",margin:"0%",color:"white",backgroundColor:"black"}}>
              Geostructural Instrumentation
            </div>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default page;
