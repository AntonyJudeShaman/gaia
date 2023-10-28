import React from "react";
import { FAQAccordion } from "@/components/faq";
import { MainNav } from "@/components/main-nav";
import Nav from "@/components/nav";
import { marketingConfig } from "config/marketing";
import { SiteFooter } from "@/components/site-footer";
import Questions from "@/components/still-questions";
import Link from "next/link";
import Service from "@/components/servicecomponent";

import { Metadata } from "next";
import Allservices from "@/components/services";

export const metadata: Metadata = {
  title: "Service",
  description: "Services offered by us",
};

function page() {
  return (
    <>
      <title>Services | Gaia</title>
      <div className="min-h-screen animate-fade-in">
        <header className="container  z-40 bg-zinc-950 text-white border-2 border-blue-500 custom-rounded-bottom">
          <div className="flex h-20 items-center justify-between py-6">
            <MainNav items={marketingConfig.mainNav} />
          </div>
        </header>
        <Nav />
        <p className="text-5xl font-heading font-semibold  mb-5 mt-10 text-center text-blue-500 ">
          Services
        </p>
        <Allservices/>
      </div>
    </>
  );
}

export default page;
