import Link from "next/link";
import { motion } from "framer-motion";
import { marketingConfig } from "config/marketing";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import IndexPage from "@/components/home-page";
import Nav from "@/components/nav";
import Aboutus from "@/components/about-us";
import { Metadata } from "next";
import Event from "@/components/events"
import SwiperComponent from "@/components/client"

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Home | Gaia",
}

export default function HomeLayout() {
  return (
    <>
      <div className="flex min-h-screen pl-4 pr-4  flex-col ">
      
        <header className="container  z-40 bg-zinc-950 text-white border-2 border-blue-500 custom-rounded-bottom">
          <div className="flex h-20 items-center justify-between py-6">
            <MainNav items={marketingConfig.mainNav} />
            
          </div>
        </header>

        <IndexPage />
        <Event/>
        
        <br/>
        <br/>
        <Aboutus />
        <Nav />
        <SiteFooter />
      </div>
    </>
  );
}
