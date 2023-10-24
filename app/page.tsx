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

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Home | Gaia",
}

export default function HomeLayout() {
  return (
    <>
      <div className="flex min-h-screen pl-4 pr-4 p-2 flex-col ">
      
        <header className="container  z-40 bg-background text-white border-2 border-blue-500 custom-rounded-bottom">
          <div className="flex h-20 items-center justify-between py-6">
            <MainNav items={marketingConfig.mainNav} />
            <nav>
              <Link
                href="/login"
                aria-label="login"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    className:
                      "border border-green-300  bg-gradient-to-bl from-pink-500 to-purple-600 hover:to-pink-500 hover:from-purple-600  w-full",
                    size: "lg",
                  }),
                  "px-4"
                )}
              >
                Login
              </Link>
            </nav>
          </div>
        </header>

        <IndexPage />
        
        <Aboutus />
        <Nav />
        <SiteFooter />
      </div>
    </>
  );
}
