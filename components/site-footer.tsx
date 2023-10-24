"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

import { siteConfig } from "config/site"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";

import logo from "./log.svg";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 space-x-5 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="block items-center space-x-2 md:flex">
            <div className="logo-font text-4xl  font-bold ">
              <Tilt className="logo-font">Gia</Tilt>
            </div>
          </Link>
          <p className="text-center text-sm leading-loose md:text-left font-semibold">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights
            Reserved.
          </p>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <Link
            href="https://www.behance.net/thewixstudio"
            target="_blank"
            aria-label="Behance"
          >
            <Button
              variant="ghost"
              className="h-8 w-8 px-1 "
              aria-label="Behance"
            >
              <Icons.behance className="hover:text-blue-500 " />
            </Button>
          </Link>
          <Link
            href=""
            target="_blank"
            aria-label="Instagram"
          >
            <Button
              variant="ghost"
              className="h-8 w-8 px-1"
              aria-label="Instagram"
            >
              <Icons.insta className="hover:text-blue-500" />
            </Button>
          </Link>
          <Link
            href=""
            target="_blank"
            aria-label="Facebook"
          >
            <Button
              variant="ghost"
              className="h-8 w-8 px-1 "
              aria-label="Facebook"
            >
              <Icons.fab className="hover:text-blue-500" />
            </Button>
          </Link>
          <Link
            href=""
            target="_blank"
            aria-label="youtube"
          >
            <Button
              variant="ghost"
              className="h-8 w-8 px-1"
              aria-label="youtube"
            >
              <Icons.youtube className="hover:text-blue-500" />
            </Button>
          </Link>

          <Link
            href=""
            target="_blank"
            aria-label="linkedin"
          >
            <Button
              variant="ghost"
              className="mr-0 h-8 w-8 px-1 "
              aria-label="linkedin"
            >
              <Icons.linkedin className="hover:text-blue-500" />
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
