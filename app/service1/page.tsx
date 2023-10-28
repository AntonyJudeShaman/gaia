import Service1 from "@/components/Service1";
import { Metadata } from "next";
import Nav from "@/components/nav";
import { MainNav } from "@/components/main-nav";
import { marketingConfig } from "config/marketing";

export const metadata: Metadata = {
    title: "GeoTechnical Investigations",
    description: "Technical Investigations by us",
  }

function serv1()
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
            <Service1/>
        </div>
    </>
    );
}
export default serv1;