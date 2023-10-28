import Service6 from "@/components/Service6";
import { Metadata } from "next";
import Nav from "@/components/nav";
import { MainNav } from "@/components/main-nav";
import { marketingConfig } from "config/marketing";
import Questions from "@/components/still-questions";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
    title: "Geostructural Instrumentation",
    description: "Technical instruments used by us",
  }

function serv6()
{
    return(
    <>
        <div className="min-h-screen animate-fade-in">
        <header className="container  z-40 bg-zinc-950 text-white border-2 border-blue-500 custom-rounded-bottom">
            <div className="flex h-20 items-center justify-between py-6">
                <MainNav items={marketingConfig.mainNav} />
            
            </div>
            </header>
             <Nav />
            <Service6/>
            <Questions/>
            <SiteFooter/>
        </div>
    </>
    );
}
export default serv6;