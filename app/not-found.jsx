"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import anime from "animejs";
import "@/styles/notfound.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div class="notfound p-6 flex gap-y-4 bg-zinc-950 flex-col items-center justify-center h-screen">
     
      <h2 className="sub-gradient font-heading text-4xl pb-3 text-center">
        404 - Page not found
      </h2>
      <p className="font-heading text-zinc-50 text-white  text-center pb-2 text-xl sm:text-6xl">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <div className="text-center mt-3">
        <Link href="/">
        <Button
          size="lg"
          aria-label="go back to homepage"
          className="border-black bg-gradient-to-b from-green-500 to-blue-600 hover:to-green-500 hover:from-blue-600 text-white hover:bg-white hover:text-black"
        >
          Go To Homepage
        </Button>
        </Link>
      </div>
    </div>
  );
}
