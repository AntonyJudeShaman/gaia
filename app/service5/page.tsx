import Service5 from "@/components/Service5";
import { Metadata } from "next";
import Nav from "@/components/nav";
import { MainNav } from "@/components/main-nav";
import { marketingConfig } from "config/marketing";
import Questions from "@/components/still-questions";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
    title: "Pile Testing",
    description: "Pile Testing by us",
  }

function serv5()
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
            <Service5/>
            <Questions/>
            <SiteFooter/>
        </div>
    </>
    );
}
export default serv5;