import React from "react";
import { Metadata } from "next";
import Nav from "@/components/nav";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { marketingConfig } from "config/marketing
import SignOut from "@/components/sign-out";

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin page to add and delete projects",
};

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
}

export default async function ProjectsHome() {
  // const { pending } = useFormStatus()

  return (
    <div className="min-h-screen animate-fade-in py-8">
      <SignOut />
      <div className="md:ml-20 ml-10">
        <MainNav items={marketingConfig.mainNav} />
      </div>
      <Nav />
      <p className="text-5xl font-heading font-semibold sub-gradient mb-5 mt-10 text-center display-animation">
        Add
      </p>

      <SiteFooter />
    </div>
  );
}
