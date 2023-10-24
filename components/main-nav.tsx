"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import Tilt from "react-parallax-tilt";
import { MainNavItem } from "types";
import { siteConfig } from "config/site";
import { Icons } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden  items-center space-x-2 md:flex" aria-label="logo">
        <span className="hidden logo-font text-4xl display-animation2 font-bold sm:inline-block">
          <Tilt className="logo-font">GAIA</Tilt>
        </span>
      </Link>
      <nav className="flex text-sm custom-rounded-bottom">
        {items && items.map((item, index) => (
          <Link
            key={index}
            aria-label="navbar items"
            href={item.disabled ? "#" : item.href}
            className={cn(
              "flex items-center hidden mr-4 text-xl md:inline-block rounded-md p-2 text-sm font-medium hover:underline",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={toggleMobileMenu}
      >
        {showMobileMenu ? (
          <Icons.close />
        ) : (
          <p className="logo-font text-4xl display-animation2 font-bold sm:inline-block">
            GAIA
          </p>
        )}
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
    

     
}
