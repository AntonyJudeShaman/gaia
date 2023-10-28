import React from "react";
import { MainNav } from "@/components/main-nav";
import Nav from "@/components/nav";
import { marketingConfig } from "config/marketing"
import { SiteFooter } from "@/components/site-footer";
import { Contactform } from "@/components/contact-form";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact us using the contact form",
}

function page() {
  return (
    <div
        className="min-h-screen bg-gray-300  animate-fade-in"
      >
      
      <header className="container  z-40 bg-zinc-950 text-white border-2 border-blue-500 custom-rounded-bottom">
          <div className="flex h-20 items-center justify-between py-6">
            <MainNav items={marketingConfig.mainNav} />
            
          </div>
        </header>
        <Nav />
        <p className="text-5xl text-blue-500 font-heading font-semibold t mb-8 mt-10 text-center ">
          Contact Us
        </p>
        <Contactform className="" />
        <SiteFooter className="mt-5"/>
    </div>
  );
}

export default page;
